import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Services</h3>
                            <h1 className="display-6 text-center mb-4"><b>Relieve</b> your anxiety</h1>
                            <hr className="w-15 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div class="card p-3">   
                                <div class="card-body text-center">
                                    <i className="fa fa-solid fa-headphones fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Relaxing Music</h5>
                                    <p class="card-text lead">Take a moment to unwind with our selection of relaxing music, carefully curated to promote a sense of calm.</p>
                                    <button onClick={() => { window.open('https://open.spotify.com/playlist/7kpASFjxLZhooMB726kkk1') } } className="btn btn-dark me-4 rounded-pill px-4 py-2"> 
                                    Spotify </button>
                                    <button onClick={() => { window.open('https://www.youtube.com/watch?v=79kpoGF8KWU') } } className="btn btn-dark me-4 rounded-pill px-4 py-2"> 
                                    Youtube </button>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">   
                                <div class="card-body text-center">
                                     <i className="fa fa-solid fa-heart fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Meditation</h5>
                                    <p class="card-text lead">Practice mindfulness and reduce anxiety with guided meditation. Take a step towards a more peaceful state of mind.</p>
                                    <button onClick={() => { window.open('https://open.spotify.com/playlist/37i9dQZF1DWVS1recTqXhf') } } className="btn btn-dark me-4 rounded-pill px-4 py-2"> 
                                    Spotify </button>
                                    <button onClick={() => { window.open('https://www.youtube.com/watch?v=O-6f5wQXSu8') } } className="btn btn-dark me-4 rounded-pill px-4 py-2"> 
                                    Youtube </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">   
                                <div class="card-body text-center">
                                    <i className="fa fa-brands fa-pagelines fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Breathing Exercises</h5>
                                    <p class="card-text lead">Learn to regulate your breathing and calm your mind with our simple yet effective breathing exercise.</p>
                                    <NavLink to="/exercise" className="btn btn-dark rounded-pill px-4 py-2">Lets breathe</NavLink>
                                    
                                </div>
                            </div>
                        </div>
                        <p></p><p></p><p></p>

                        <div className="col-md-4">
                            <div class="card p-3">   
                                <div class="card-body text-center">
                                    <i className="fa fa-solid fa-gamepad fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Games</h5>
                                    <p class="card-text lead">Take a break from the stress of gaming and enjoy our selection of fun and calming games.</p>
                                    <button onClick={() => { window.open('https://www.shaunthesheep.com/games/wheres-shaun/') } } className="btn btn-dark rounded-pill px-4 py-2"> 
                                    Let's play </button>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">   
                                <div class="card-body text-center">
                                    <i className="fa fa-solid fa-book fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Coloring book</h5>
                                    <p class="card-text lead">Unleash your creativity and relax with Google's Art Coloring Book to promote a sense of calm.</p>
                                    <button onClick={() => { window.open('https://artsandculture.google.com/experiment/art-coloring-book/1QGsh6vSfAQBgQ?hl=en') } } className="btn btn-dark rounded-pill px-4 py-2"> 
                                    Click Here </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card p-3">   
                                <div class="card-body text-center">
                                    <i className="fa fa-solid fa-phone fa-4x mb-4 text-primary"></i>
                                    <h5 class="card-title mb-3 fs-4 fw-bold">Support hotline</h5>
                                    <p class="card-text lead">Remember, you're not alone. If you're feeling overwhelmed and need to talk to someone, help is just a phone call away."</p>
                                    <button onClick={() => { window.open('https://srilankasumithrayo.lk/') } } className="btn btn-dark rounded-pill px-4 py-2"> 
                                    Click Here </button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
