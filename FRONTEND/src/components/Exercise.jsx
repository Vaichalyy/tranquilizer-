import React from "react";
import Breathe from "../Breathe";

const Exercise = () => {
    return(
        <div> 
            <section id="exercise">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/aboutImg.png" alt="About" className = "w-75 mt-5"/>
                        </div>
                        <div className="col-md-6">
                            <Breathe />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
    
    export default Exercise;