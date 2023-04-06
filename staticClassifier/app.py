from flask import Flask, render_template, request, redirect, url_for, send_file

import cv2
import numpy as np
from keras.models import load_model


app = Flask(__name__)




@app.route('/',methods=['Get'])
def hello_world():
    return render_template('index.html')


@app.route('/after',methods=['GET','POST'])
def after():
    # Load the trained model and cascade classifier
    model = load_model('model_file_30epochs.h5')
    faceDetect = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
    
    # Get the uploaded image
    file = request.files['imagefile']
    img = cv2.imdecode(np.fromstring(file.read(), np.uint8), cv2.IMREAD_UNCHANGED)
    
    # Convert the image to grayscale and detect faces
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = faceDetect.detectMultiScale(gray, 1.3, 3)
    
    # Define the emotion labels
    labels_dict = {0: 'Angry', 1: 'Disgust', 2: 'Fear', 3: 'Happy', 4: 'Neutral', 5: 'Sad', 6: 'Surprise'}
    
    # Loop over the detected faces and predict the emotion for each face
    for x,y,w,h in faces:
        sub_face_img = gray[y:y+h, x:x+w]
        resized = cv2.resize(sub_face_img, (48, 48))
        normalize = resized/255.0
        reshaped = np.reshape(normalize, (1, 48, 48, 1))
        result = model.predict(reshaped)
        label = np.argmax(result, axis=1)[0]
        final_prediction =labels_dict[label]

    return render_template('after.html',data=final_prediction)


if __name__ == '__main__':
    app.run(port=3000, debug=True)



