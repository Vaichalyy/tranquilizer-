import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return(
        <div> 
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/aboutImg.png" alt="About" className = "w-75 mt-5"/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b> We </b> Are </h1>
                            <hr className = "w-50"/>
                            <p className="lead mb-4">Welcome to our anxiety detection and management 
                            website for all you gamers (and non-gamers😉)! <br /><br />
                            We understand the importance of mental health and 
                            the impact it can have on your gaming experience. That's why we've created 
                            a platform that helps you monitor your anxiety in real-time while you play 
                            your favorite video games. Our system utilizes advanced Convolutional Neural 
                            Network (CNN) deep learning technology to detect anxiety in real-time by 
                            continuously monitoring your facial expressions while you play. This provides 
                            you with a means of identifying symptoms of state anxiety and understanding 
                            your emotional state. <br /><br />
                            In addition to our anxiety detection services, we offer a variety of resources 
                            to help you manage your anxiety and enhance your gaming experience. Our website 
                            provides a range of breathing exercises, calming games, and other relaxation 
                            techniques that can be used to reduce anxiety and promote a sense of well-being. <br /><br />
                            Our website is designed to provide a safe and supportive environment for you to manage your anxiety and 
                            improve your overall well-being. With our advanced technology and resources, 
                            we're here to help you achieve your best performance and experience gaming in 
                            a whole new way. <br /><br />
                            So why wait? Sign up today and discover the power of anxiety 
                            detection and management!</p>
                            <NavLink to="/register" className="btn btn-dark rounded-pill px-4 py-2">Get started</NavLink>
                            <NavLink to="/contact" className="btn btn-outline-dark rounded-pill px-4 py-2 ms-2">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
    
    export default About;