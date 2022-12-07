import React from "react";
import logotip from '../images/Logotip.png'
import {userService} from './service'
import {scrollToTop} from './Footer'

let make = [
    {
        label: "Select",
        value: "select"
    },
    {
        label: "Jump Start",
        value: "jump-start"
    },
    {
        label: "Fuel Delivery",
        value: "fuel-delivery"
    },
    {
        label: "Tire Service",
        value: "tire-service"
    },
    {
        label: "Lock Out",
        value: "lock-out"
    }

]

class Booking extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        email: "",
        reason: "",
        vehicleLocation: "",
        licensePlate: "",
        vehicleYear: "",
        make: "",
        model: "",
        color: "",
        numberTicket: "",
        tel: "",
        did: false,
        ticket: [],
        error: ""
    }

    OnSubmit = (e) => {
        try {
            e.preventDefault()
            userService.myAccount(this.state)
                .then(e => console.log(e))
                .catch(e => console.log(e))


        }catch (e) {
            console.log(e)
        }
    }


    render() {
        if (this.state.error){
            return (
                <div>ERROR</div>
            )
        }else{
            return (
                <div className="form  mb-3">
                    <div className="row log">
                        <div className="col-6">
                            <img src={logotip} width="150" height="100" className="ml-5 book-logo" alt="logo"/>
                        </div>
                        <div className="col-6 mt-4 main">
                            <h6>DGM Express</h6>
                            <p>Address: 739 E Independence dr, Palatine, IL 60074</p>
                            <p className="tel:312-966-5858">Phone: 312-966-5464</p>
                            <p>Email: dgmexpressinc@gmail.com</p>
                        </div>
                    </div>

                    <div className="card border-primary mb-3 cards">
                        <div className="card-header" role="alert">
                            Request Service
                        </div>
                        <div className="card-body">

                            <div className="col-lg-12 ">
                                <form className="needs-validation" noValidate>
                                    <div className="row g-3">
                                        <div className="col-lg-6">
                                            <label htmlFor="firstName" className="form-label">First name</label>
                                            <input type="text" className="form-control input" id="firstName"
                                                   onChange={e => this.setState({firstName: e.target.value})}
                                            />
                                            <div className="invalid-feedback">
                                                Valid first name is required.
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="lastName" className="form-label">Last name</label>
                                            <input type="text" className="form-control input" id="lastName"
                                                   onChange={e => this.setState({lastName: e.target.value})}
                                            />
                                            <div className="invalid-feedback">
                                                Valid last name is required.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label">Email <span
                                                className="text-muted"/></label>
                                            <input type="email" className="form-control input" id="email"
                                                   placeholder="you@example.com"
                                                   onChange={e => this.setState({email: e.target.value})}
                                            />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="tel" className="form-label">Phone <span className="text-muted"/></label>
                                            <input type="email" className="form-control input" id="tel"
                                                   placeholder="123-456-7890"
                                                   onChange={e => this.setState({tel: e.target.value})}
                                            />
                                            <div className="invalid-feedback">
                                                Please enter a valid email address for shipping updates.
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <label htmlFor="lastName" className="form-label">Reason</label>
                                            <select className="custom-select input"
                                                    onChange={e => this.setState({reason: e.target.value})}
                                            >
                                                {make.map((option, i) => (
                                                    <option key={i} value={option.value}>{option.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="vehicleLocation" className="form-label">Vehicle Location</label>
                                            <input type="text" className="form-control input" id="vehicleLocation"
                                                   placeholder="1234 Main St, City, State, Zipcode" required
                                                   onChange={e => this.setState({vehicleLocation: e.target.value})}

                                            />
                                            <div className="invalid-feedback">
                                                Please enter your address.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="license-plate" className="form-label">License Plate<span
                                                className="text-muted"/></label>
                                            <input type="text" className="form-control input" id="license-plate"
                                                   placeholder="License Plate"
                                                   onChange={e => this.setState({licensePlate: e.target.value})}
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your License Plate.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="vehicleLocation" className="form-label">Vehicle Year</label>
                                            <input type="text" className="form-control input" id="year" placeholder="Year"
                                                   required
                                                   onChange={e => this.setState({vehicleYear: e.target.value})}
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your Vehicle Year.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="make" className="form-label">Make</label>
                                            <input type="text" className="form-control input" id="make" placeholder="Make"
                                                   required
                                                   onChange={e => this.setState({make: e.target.value})}
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your Make.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="model" className="form-label">Model</label>
                                            <input type="text" className="form-control input" id="model" placeholder="Model"
                                                   required
                                                   onChange={e => this.setState({model: e.target.value})}
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your Model.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="color" className="form-label">Color</label>
                                            <input type="text" className="form-control input" id="color" placeholder="Color"
                                                   required
                                                   onChange={e => this.setState({color: e.target.value})}
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your Color.
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4"/>
                                    <button className="w-100 btn btn-primary btn-lg mb-4  booking-button"
                                            type="button"
                                        // onTouchStart={this.OnSubmit}
                                            onClick={this.OnSubmit}
                                    >Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            )
        }
    }
}

export default Booking;
