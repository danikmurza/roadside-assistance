import React from "react";
import jumpStart from '../images/jump-start.jpg'

import '../App.css';
import {Link} from "react-router-dom";
import {scrollToTop} from './Footer'

function JumpStart() {
    return (
        <div>
            <div>
                <h3 className="text-md-center mt-2">
                    Jump Start
                </h3>
            </div>
            <div className="jumbotron jumba">
                <img src={jumpStart} className="card-img-top jump-image" alt="jump"/>
                <h6 className="display-3 pt-2 text-sm-center pb-4">Jump Start Services</h6>
                <p className="lead">Even the best and most modern batteries can experience technical difficulties from time to time, leaving your battery without any power. On other occasions, you may have left your lights on, interior lights left on, cold weather  or there is a fault in the charging system and your car will not turn over.  No matter the cause, having a dead car battery can derail your plans and leave you stranded.
                    When it comes to vehicle jump start service, there is no one that is more dependable, fast, efficient, and friendly than us.

                    Upon receiving your phone call for assistance, we aim to get to your location within twenty minutes, if possible. Once we arrive, our highly trained team will do all we can to get your vehicle functional .

                    If your car battery needs a jump-start, you can always rely on us to do it for you. Our services are fast  and affordable  24/7. </p>
                <hr className="my-4"/>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/booking" role="button" onClick={() => scrollToTop()}>BOOK
                        NOW</Link>
                </p>
            </div>
        </div>
    );
}

export default JumpStart;
