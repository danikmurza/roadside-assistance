import React from "react";
import jumpStart from '../images/jump-start.jpg'
import lockOut from '../images/lock-out.jpg'
import tireService from '../images/tire-service.jpg'
import fuelDelivery from '../images/fuel-delivery.jpg'
import {Carousel} from 'react-bootstrap'


import '../App.css';

function Home() {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={jumpStart} alt="First slide"/>
                <Carousel.Caption>
                    {/*<h3>First slide label</h3>*/}
                    <h1 className="lo">Jump Start</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={lockOut} alt="Third slide"/>
                <Carousel.Caption>
                    <h1 className="lo">Lock Out</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={tireService} alt="Third slide"/>
                <Carousel.Caption>
                    <h1 className="lo">Tire Service</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={fuelDelivery} alt="Third slide"/>
                <Carousel.Caption>
                    <h1 className="lo">Fuel Delivery</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;

