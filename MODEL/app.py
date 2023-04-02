from flask import Flask, render_template,Response
import cv2
import numpy as np
from keras.models import load_model
import time

api = Flask(__name__)
camera = cv2.VideoCapture(0)

def generate_frames():

    model= load_model('model_file2_70epochs.h5')
    video=cv2.VideoCapture(0)
    video.set(cv2.CAP_PROP_FPS, 30.0)

    file = open('state_values.txt', 'w')
    state_label = None

    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

    labels_dict={0:'Anxiety',1:'Neutral'}
    pTime = 0

    while True:
        success,frame=camera.read()
        if not success:
            break
        else:
            gray=cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            faces= face_cascade.detectMultiScale(gray, 1.3, 3)
            for x,y,w,h in faces:
                sub_face_img=gray[y:y+h, x:x+w]
                resized=cv2.resize(sub_face_img,(48,48))
                normalize=resized/255.0
                reshaped=np.reshape(normalize, (1, 48, 48, 1))
                result=model.predict(reshaped)
                label=np.argmax(result, axis=1)[0]
                print(labels_dict[label])

                state_label = str(label)
            

                file = open('state_values.txt', 'a')
                file.write(state_label+'\n') # save the status to a txt file to further usage
                file.close()


                cv2.rectangle(frame, (x,y), (x+w, y+h), (0,0,255), 1)
                cv2.rectangle(frame,(x,y),(x+w,y+h),(50,50,255),2)
                cv2.rectangle(frame,(x,y-40),(x+w,y),(50,50,255),-1)
                cv2.putText(frame, labels_dict[label], (x, y-10),cv2.FONT_HERSHEY_SIMPLEX,0.8,(255,255,255),2)
                # Current time and previous time
                cTime = time.time()
                fps = 1 / (cTime - pTime)
                pTime = cTime
                cv2.putText(frame, f'FPS: {int(fps)}', (20, 70), cv2.FONT_HERSHEY_PLAIN,3, (0, 255, 0), 3)


            ret,buffer=cv2.imencode('.jpg', frame)
            frame=buffer.tobytes()

        yield(b'--frame\r\n'
                    b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')


# @app.route('/')
# def index():
#     return render_template('index.html')

@api.route('/video')
def video():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__=="__main__":
    api.run(debug=True)