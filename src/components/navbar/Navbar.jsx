import "./navbar.scss";
import {Person} from "@material-ui/icons";
// import {ZAlogo} from "../../../public/images/ZAlogo";
import logo from "../../../src/ZAlogo.png";
export default function Navbar(props) {
    return (
        <div className={"navbar " +  (props.menuActive && "active")} id="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src={logo} />
                    </a>
                </div>
                <div className="right">
                    <a href="#about" className="header-links">About</a>
                    <a href="#portfolio" className="header-links">Portfolio</a>
                    <div className="hamburger" onClick={() => props.setMenuActive(!props.menuActive)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>
        </div>
    )
}
