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
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">We are a group of conselling psychologists </h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Labore distinctio officiis tempore repellat aliquam sapiente voluptate totam vero alias voluptates?</p>
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