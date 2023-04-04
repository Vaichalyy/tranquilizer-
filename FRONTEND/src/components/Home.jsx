import React from "react";
import Contact from "./Contact";
import About from "./About";
import Service from "./Services";
import { NavLink } from "react-router-dom";

const Home = () => {
    return(
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Your new gaming buddy!</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">We're glad to have you here. Get started with 
                            anxiety detection. Our advanced technology detects anxiety in real-time while you play 
                            video games. Click below to begin!</p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</NavLink>
                                <NavLink to="/service" className="btn btn-outline-light me-4 rounded-pill px-4 py-2">Services</NavLink>
                                <NavLink to="/detect" className="btn btn-outline-light me-4 rounded-pill px-4 py-2">Detect emotion</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Service/>
            <Contact/>
        </div>
    );
}

export default Home;