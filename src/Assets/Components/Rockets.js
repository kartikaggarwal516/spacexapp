import React, { Component } from "react"
import axios from "axios"
import Header from "./Header"
import "../Styles/rockets.css"
import { Card,Button } from "react-bootstrap"
import { bindActionCreators } from "redux"
import {getRockets} from "../Actions/Actions"
import { connect } from "react-redux"

const rurl = "https://api.spacexdata.com/v3/rockets"

class Rockets extends Component {
    state = {
        
    }

    getUserData = () => {
        axios.get(rurl)
            .then((response) => {
                // handle success                
                this.props.getRockets(response.data)                
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
        const { rockets } = this.props
        return (
            <div className="rockets">
                <Header />                
                <h1>SPACEX ROCKETS</h1>
                <div className="rocketbox">
                {rockets.map((r, i) => {
                    return (
                        <Card style={{ width: '18rem' }} key={i} className="rcard" >
                            <Card.Body>
                                <h2>{r.rocket_name}</h2>
                                <Card.Text>
                                    {r.description}                                
                                </Card.Text>
                                <h4>Specs</h4>
                                <ul>
                                    <li>Height: {`${r.height.meters}m`} </li>
                                    <li>Diameter: {`${r.diameter.meters}m`} </li>
                                    <li>Mass: {`${r.mass.kg}kg`} </li>
                                    <li>Booster: {r.boosters} </li>
                                    <li>Success Rate: {r.success_rate_pct} </li>
                                </ul>
                                <h4>Engines</h4>
                                <ul>
                                    <li>Engines: {r.engines.number} </li>
                                    <li>Type: {r.engines.type} </li>
                                    <li>Version: {r.engines.version} </li>
                                    <li>Propellant 1: {r.engines.propellant_1} </li>
                                    <li>Propellant 2: {r.engines.propellant_2} </li>
                                </ul>
                                <a href={r.wikipedia}>
                                    <Button variant="primary">Read about {r.rocket_name} on Wikipedia </Button>
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
        rockets: store.rockets
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {getRockets}, dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Rockets)