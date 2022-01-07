import "./navbar.scss";
import {Person} from "@material-ui/icons";
// import {ZAlogo} from "../../../public/images/ZAlogo";
import logo from "../../../src/logos/ZAlogo.png";
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
                    <div className="links">
                        <a href="#about" className="header-links">About</a>
                        <a href="#portfolio" className="header-links">Portfolio</a>
                        <a href="#contact" className="header-links">Contact Me</a>
                    </div>
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
