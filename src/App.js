import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import JumpStart from "./component/JumpStart";
import GasDelivery from "./component/GasDelivery";
import LockOut from "./component/LockOut";
import TireService from "./component/TireService";
import Booking from "./component/Booking";
import Request from "./component/request";


function App() {
    return (
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/jump_start" component={JumpStart}/>
                <Route path="/gas_delivery" component={GasDelivery}/>
                <Route path="/lock_out" component={LockOut}/>
                <Route path="/tire_service" component={TireService}/>
                <Route path="/booking" component={Booking}/>
                <Route path="/request" component={Request}/>
                <Redirect from="/*" to="/" />
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
