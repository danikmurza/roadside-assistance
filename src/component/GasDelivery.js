import React from "react";
import '../App.css';

import fuelDelivery from '../images/fuel-delivery.jpg'
import {Link} from "react-router-dom";
import {scrollToTop} from './Footer'

function GasDelivery() {
    return (
        <div>
            <div>
                <h3 className="text-md-center mt-2">
                    Gas Delivery
                </h3>
            </div>
            <div className="jumbotron jumba">
                <img src={fuelDelivery} className="card-img-top jump-image" alt="jump"/>
                <h6 className="display-3 pt-2 text-sm-center pb-4">Gas Delivery!</h6>
                <p className="lead">We have all had that  moment where we thought that we could make it to the nearest gas station, but failed miserably. If you ran out of gas on a road or a highway, we can provide you with roadside assistance, delivering up to one gallons of fuel directly to you.

                    DGM express provides fuel delivery service aimed at making your life easier.  Fuel delivery allows users to fill up vehicles at any time, at any desired point or location without the need for a gas station.
                    During travel, if you run out of fuel, it is really annoying and frustrating. You should not get frustrated and worried if you Run Out of Fuel and you are on the road. We will make it possible to continue your travel with our Fuel Delivery Service.
                </p>
                <hr className="my-4" />
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/booking" role="button" onClick={()=>scrollToTop()}>BOOK NOW</Link>
                </p>
            </div>
        </div>
    );
}

export default GasDelivery;
