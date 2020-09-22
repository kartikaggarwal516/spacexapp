import React, { Component } from "react"
import Header from "./Header"
import axios from "axios"
import "../Styles/launches.css"
import { Card, Button } from "react-bootstrap"
import { bindActionCreators } from "redux"
import {getLaunches} from "../Actions/Actions"
import { connect } from "react-redux"
import PageOrder from "./PageOrder"

const lurl = "https://api.spacexdata.com/v3/launches?limit=3&offset="

class Launches extends Component {
    state = {        
    }

    getUserData = () => {
        let offset = (this.props.activePage-1)*3
        axios.get(`${lurl}${offset}`)
            .then((response) => {
                // handle success                                
                this.props.getLaunches(response.data)
                console.log("launches", this.props.launches)
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
    componentDidUpdate(prevprops) {
        if(prevprops.activePage != this.props.activePage)
        this.getUserData()
    }

    render() {
        const { launches } = this.props
        return (
            <div className="launches">
                <Header />                
                <h1>SPACEX LAUNCHES</h1>
                <div className="launchbox">
                    {launches.map((l, i) => {
                        return (
                            <Card style={{ width: '18rem' }} key={i} className="lcard" >
                                <Card.Img variant="top" src={l.links.mission_patch_small} height="150px" />
                                <Card.Body>
                                    <h2>{l.mission_name}</h2>
                                    <Card.Title>Mission Details:</Card.Title>
                                    <ul>
                                        <li>Rocket Name: {l.rocket.rocket_name}</li>
                                        <li>Rocket Type: {l.rocket.rocket_type}</li>
                                        <li>Launch Year: {l.launch_year} </li>
                                        <li>Launch Site: {l.launch_site.site_name} </li>
                                        <li>Launch: {l.launch_success ? "Success" : "Failure"} </li>
                                    </ul>
                                    <a href={l.links.video_link}>
                                        <Button variant="primary">Watch Video</Button>                                    
                                    </a>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
                <div className="pagebox">
                    <PageOrder />
                </div>          
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{
        launches: store.launches,
        activePage: store.activePage
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {getLaunches}, dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Launches)