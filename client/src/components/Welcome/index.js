import "./style.css"
import { Link } from "react-router-dom";

function index() {

    // document.getElementById("brand-logo").hide();

    return (
        <div className="container valign-wrapper">
            <div className="row valign">
                <div className="col l12 m12 s12 center">
                    <div className="card-panel transparentBG no-shadows ">
                    <h1 className="black-text large-welcome">Welcome to TRVLR</h1>
                    <h1 className="mobile-welcome center-align">T R V L R</h1>
                    </div>
                </div>
                <div className="col l12 s12 center">
                    <div className="card-panel transparentBG no-shadows mobile-action">
                    <h5 className="black-text">Plan your next trip with your friends - all in one place.</h5>
                    </div>
                </div>
                <div className="mobile-buttons">
                    <Link to="/login" className="roundedbtn btn-small white-text bigger-text">Log In</Link>
                    <br></br>
                    <Link to= "/signup" className="roundedTransparent btn-small transparentBG no-shadows">Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default index
