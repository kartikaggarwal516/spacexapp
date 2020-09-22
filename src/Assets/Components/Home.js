import React, { Component } from "react"
import Header from "./Header"
import axios from "axios"
import "../Styles/home.css"
import { bindActionCreators } from "redux"
import {getInfo} from "../Actions/Actions"
import { connect } from "react-redux"

const url = "https://api.spacexdata.com/v3/info"

class Home extends Component {
    state = {
        
    }

    getUserData = () => {
        axios.get(url)
            .then((response) => {
                // handle success                
                this.props.getInfo(response.data)                
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
        const { info } = this.props        
        return (
            <div className="home">
                <Header {...this.props} />
                <div className="homebox">
                    <div className="about">
                        <h2>ABOUT SPACEX</h2>
                        <p>{info.summary}</p>
                    </div>
                    <div className="cinfo">
                        <h2>COMPANY INFO</h2>
                        <ul>
                            <li>Founded: {info.founded}</li>
                            <li>Employees: {info.employees}</li>
                            <li>Launch Sites: {info.launch_sites}</li>
                            <li>Test Sites: {info.test_sites}</li>
                            <li>Vehicles: {info.vehicles}</li>
                        </ul>
                    </div>
                    <div className="cleaders">
                        <h2>COMPANY LEADERSHIP</h2>
                        <ul>
                            <li>CEO: {info.ceo}</li>
                            <li>COO: {info.coo}</li>
                            <li>CTO: {info.cto}</li>
                            <li>CTO of Propulsion: {info.cto_propulsion}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return{
        info: store.info
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {getInfo}, dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)