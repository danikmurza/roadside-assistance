import React from "react";
import logo from '../images/Logotip.png'


class Request extends React.Component {

    render() {

        return(
            <div className="container form ">
                <div className="row">
                    <div className="col-4">
                        <img src={logo}   width="150" height="100" className="ml-5 book-logo" alt="logo"/>
                    </div>

                    <div className="col-6 mt-4 main">
                        <h6>DGM Express</h6>
                        <p>Address: 739 E Independence dr, Palatine, IL 60074</p>
                        <p className="tel:312-966-5464">Phone: 312-966-5464</p>
                        <p>Email: dgmexpressinc@gmail.com</p>
                    </div>
                </div>

                <div className="card text-white bg-primary mb-3 mt-4">


                <div className="card-header text-md-center" >
                    Request Complete
                </div>

                <div className="card-body">
                    <h6 className="card-title text-md-center">Thank You!</h6>
                    <p className="card-text">
                        You have successfully requested a service from DGM Express. If you have questions or concerns please call us at 312-966-5464.</p>

                    {/*<p>The reference number for this request is#{ this.state.ticket ===null}</p>*/}
                </div>
                </div>


            </div>
        )
    }
}

export default Request;
