import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div> 
            <footer className="footer text-white bg-primary">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-3">
                                <h4>TRANQUILIZER</h4>
                            </div>

                            <div className="col-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li class="nav-item mb-2">
                                    <NavLink className="nav-link p-0 text-white" aria-current="page" to="/" >Home</NavLink>
                                    </li>

                                    <li class="nav-item mb-2">
                                    <NavLink className="nav-link p-0 text-white" to="/about"  >About</NavLink>
                                    </li>

                                    <li class="nav-item mb-2">
                                        <NavLink className="nav-link p-0 text-white" to="/service"  >Services</NavLink>
                                    </li>

                                    <li class="nav-item mb-2">
                                        <NavLink className="nav-link p-0 text-white" to="/contact"  >Contact us</NavLink>
                                    </li>
                                
                                </ul>
                            </div>
                            <div className="col-4 offset-1">
                              <form>
                                <h5>Subscribe to our newletter</h5>
                                <p>Monthly digest of whats new and exciting from us.</p>
                                <div className="d-flex w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">
                                        Email address
                                    </label>
                                    <input
                                    id="newsletter1"
                                    type="text"
                                    className="form-control"
                                    placeholder="Email address"
                                    />
                                    <button
                                    className="btn btn-light rounded-pill px-4"
                                    type="button"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                              </form>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                            <p>© 2021 Company, Inc. All rights reserved.</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-facebook fa-2x"></i>
                                    </a>
                                </li>

                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-instagram fa-2x"></i>
                                    </a>
                                </li>

                                <li className="ms-3">
                                    <a className="link-light" to="#">
                                        <i className="fa fa-twitter fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </footer>
        </div>
        );
    }
    
    export default Footer;