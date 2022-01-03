import "./topbar.scss";
import {Person} from "@material-ui/icons"

export default function Topbar(props) {
    return (
        <div className={"topbar " +  (props.menuActive && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Logo</a>
                </div>
                <div className="right">
                    <a href="#intro" className="header-links">About</a>
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
