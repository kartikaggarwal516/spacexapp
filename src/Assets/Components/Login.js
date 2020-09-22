import React, { Component } from "react"
import axios from "axios"
import "../Styles/login.css"
import {Redirect} from "react-router-dom"

const loginurl = "https://run.mocky.io/v3/689bee42-50f3-4da7-9046-64bde3a0317b"

class Login extends Component {
    state = {
        users: [],
        errors: {
            user: "",
            pwd: "",
            sbt: ""
        }
    }

    submitHandler = e => {
        e.preventDefault()
        const user = e.target[0].value
        const pwd = e.target[1].value

        const { users, errors } = this.state
        let u = 0

        if (user.length == 0 || pwd.length == 0) {
            errors.sbt = "Please fill all the fields"
            this.setState({ errors })
            return
        }

        while (u < users.length) {
            if (users[u].user != user)
                u++
            else {
                if (users[u].pwd != pwd) {
                    errors.pwd = "Wrong Password"
                    break
                }
                else {
                    console.log("user", user, "pwd", pwd)
                    localStorage.setItem("user", JSON.stringify(users[u]))
                    this.props.history.push({
                        pathname: '/home'
                    })                    
                    break
                }
            }
        }

        if (u == users.length)
            errors.user = "User does not exist"

        this.setState({ errors })
    }

    getUserData = () => {
        axios.get(loginurl)
            .then((response) => {
                // handle success                
                this.setState({ users: response.data })                
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
        const { errors } = this.state
        return (
            <div className="login">
                <img src="https://www.spacexwiki.com/static/media/spacex-logo.9250222f.svg" alt="SpaceX logo" width="350px" />
                <form className="SignIn-form" onSubmit={this.submitHandler}>
                    <center><h3>Sign In</h3></center>
                    <div className="SI-form-group">
                        <label >Username</label>
                        <input type="text" placeholder="Enter Username"></input>
                        {errors.user.length > 0 && <div className="errmsg">{errors.user}</div>}
                    </div>
                    <div className="SI-form-group">
                        <label >Password</label>
                        <input type="password" placeholder="Enter password"></input>
                        {errors.pwd.length > 0 && <div className="errmsg">{errors.pwd}</div>}
                    </div>

                    <div className="SI-form-group">
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        {errors.sbt.length > 0 && <div className="errmsg">{errors.sbt}</div>}
                    </div>

                </form>
            </div>
        )
    }
}

export default Login