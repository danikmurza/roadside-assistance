import React from "react";
import {Button} from 'react-bootstrap'
import {Link} from "react-router-dom";
import {scrollToTop} from './Footer'



import '../App.css';


function Header() {
    return (
        <>
            <div className="navigation row">
                <Link to="/" className="btn  col-1 nav-btn" onClick={() => scrollToTop()}>Home</Link>
                <Link to="/jump_start" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>Jump Start</Link>
                <Link to="/gas_delivery" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>Fuel
                    Delivery</Link>
                <Link to="/lock_out" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>Lock out</Link>
                <Link to="/tire_service" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>Tire
                    Service</Link>
                <Link to="/" className="btn col-1 nav-btn" onClick={() => scrollToTop()}>About Us</Link>
                <div className="col-lg-5 ">
                    <Link to="/booking" className="col-12 mr-0 pr-0">
                        <Button variant="outline-success" className="book-now" onClick={() => scrollToTop()}>BOOK
                            NOW</Button>
                    </Link>
                </div>
            </div>
            <div className="iphone">
                <Link to="/" className="mt-4">
                    <Button variant="outline-danger" className="book-now" onClick={() => scrollToTop()}>Home</Button>
                </Link>
                <Link to="/booking" className="">
                    <Button variant="outline-danger" className="book-now" onClick={() => scrollToTop()}>BOOK
                        NOW</Button>
                </Link>
                <div className="mt-3 pb-3">
                    <a href="tel:312-966-5464" className="call-now btn btn-outline-danger">312-966-5464</a>
                </div>
            </div>

        </>
    )
}

export default Header;
