import React from "react"
import "../Styles/header.css"
import { Link, useHistory } from "react-router-dom"
import { Badge } from "react-bootstrap"
import logout from "../Images/logout_img.png"

const Header = props => {
    const history = useHistory()
    const loggeduser = localStorage.getItem("user")
    const user = JSON.parse(loggeduser)
    console.log("loggeduser", user)

    if (!user) {
        history.push({
            pathname: '/'
        })
    }

    const signout = () => {
        localStorage.removeItem("user")
    }
    return (
        <div className="hcontainer">
            <div className="hlogo">
                <Link to="/home">
                    <img src="https://www.spacexwiki.com/static/media/spacex-logo.9250222f.svg" alt="SpaceX logo" width="280px" />
                </Link>
            </div>
            <div className="hmenu">
                <Link to="/launches">LAUNCHES</Link>
                <Link to="/rockets">ROCKETS</Link>
                <Link to="/dragons">DRAGONS</Link>
                {user && user.role == "user"
                    ? <Badge variant="secondary" className="badge">{user.role}</Badge>
                    : <Badge variant="warning"> {user.role}</Badge>
                }
                <h5>{user && user.user}</h5>
                <Link to="/" onClick={signout}>
                    <img src={logout} alt="logout img" width="20px" className="logout" />
                </Link>
            </div>
        </div>
    )
}

export default Header