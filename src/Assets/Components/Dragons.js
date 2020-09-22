import React, { Component } from "react"
import axios from "axios"
import "../Styles/dragons.css"
import { Button, Card } from "react-bootstrap"
import Header from "./Header"
import { bindActionCreators } from "redux"
import {getDragons} from "../Actions/Actions"
import { connect } from "react-redux"

const curl = "https://api.spacexdata.com/v3/dragons"

class Dragons extends Component {
    state = {
        
    }

    getUserData = () => {
        axios.get(curl)
            .then((response) => {
                // handle success                
                this.props.getDragons(response.data)                
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    componentDidMount() {
        this.getUserData()
    }

    render() {
        const { dragons } = this.props
        return (
            <div className="dragons">
                <Header />                
                <h1>SPACEX DRAGONS</h1>
                <div className="dbox">
                    {dragons.map((d, i) => {
                        return (
                            <Card style={{ width: '18rem' }} key={i} className="rcard" >
                                <Card.Body>
                                    <h2>{d.name}</h2>
                                    <Card.Text>
                                        {d.description}
                                    </Card.Text>
                                    <h4>Specs</h4>
                                    <ul>
                                        <li>Crew Capacity: {d.crew_capacity} </li>
                                        <li>Height w/Trunk: {`${d.height_w_trunk.meters}m`} </li>
                                        <li>Diameter: {`${d.diameter.meters}m`} </li>
                                        <li>Sidewall Angle: {d.sidewall_angle_deg} </li>
                                        <li>Orbit Duration: {`${d.orbit_duration_yr} years`} </li>
                                    </ul>
                                    <h4>Heat Shield</h4>
                                    <ul>
                                        <li>Material: {d.heat_shield.material} </li>
                                        <li>Size: {d.heat_shield.size_meters} </li>
                                        <li>Temperature: {d.heat_shield.temp_degrees} </li>
                                        <li>Partner: {d.heat_shield.dev_partner} </li>
                                    </ul>
                                    <h4>Thrusters</h4>
                                    {d.thrusters.map((n, i) => {
                                        return (
                                            <ul key ={i}>
                                                <li>Type: {n.type} </li>
                                                <li>Pods: {n.pods} </li>
                                                <li>Fuel 1: {n.fuel_1} </li>
                                                <li>Fuel 2: {n.fuel_2} </li>
                                                <li>Thrust: {`${n.thrust.kN} kN`} </li>
                                            </ul>
                                        )
                                    })}
                                    <a href={d.wikipedia}>
                                        <Button variant="primary">Read about {d.name} on Wikipedia </Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{
        dragons: store.dragons
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {getDragons}, dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Dragons)