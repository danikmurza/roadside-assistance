import React from "react";
import '../App.css';

import lockOut from '../images/lock-out.jpg'

import {Link} from "react-router-dom";
import {scrollToTop} from './Footer'

function LockOut() {
    return (
        <div>
            <div>
                <h3 className="text-md-center mt-2">
                    Lock Out
                </h3>
            </div>
            <div className="jumbotron jumba">
                <img src={lockOut} className="card-img-top jump-image" alt="jump"/>
                <h6 className="display-3 pt-2 text-sm-center pb-4">Lock-out</h6>
                <p className="lead">Our services are available 24 hours a day, 7 days a week for the convenience of our customers. Upon receiving your call, we will head to your location as quickly as possible to get you back on the road.

                    Every day there are people that manage to lock themselves out of their vehicles.  They can end up locked in the trunk, if that is where you put them when loading your items. On other occasions, you could leave the keys in the ignition and while fueling your car at the gas station, your car doors are auto locked or  lose the keys and there is either no spare, or it is in an alternative location. Regardless of the reason that you have been locked out of your car, you need a Car Lockout  that you can count on.

                    For the car lockouts experience, there is no better roadside assistance company available than us. We know how to handle all of the problems that can leave you locked out of your vehicle.  We will be there when and where you need us to get you into your locked car so you can continue to your destination. Our priority is always to provide you with the best customer service in the industry at the most competitive prices, in the quickest response time possible. Call us whenever you need us, day or night and we will be there to help.</p>
                <hr className="my-4" />
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/booking" role="button" onClick={()=>scrollToTop()}>BOOK NOW</Link>
                </p>
            </div>
        </div>
    );
}

export default LockOut;
