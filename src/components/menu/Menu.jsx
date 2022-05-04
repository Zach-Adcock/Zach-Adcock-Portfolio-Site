import "./menu.scss";
import ResumePDF from "../../pdfs/Zach-Adcock-Resume-2022.pdf";


export default function Menu(props) {
    return (
        <div className={"menu " + (props.menuActive && "active")}>
            <ul>
                <li onClick={() => props.setMenuActive(!props.menuActive)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => props.setMenuActive(!props.menuActive)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={() => props.setMenuActive(!props.menuActive)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => props.setMenuActive(!props.menuActive)}>
                    <a href="#contact">Contact</a>
                </li>
                <li onClick={() => props.setMenuActive(!props.menuActive)} className="mobile-resume">
                    <a href = {ResumePDF} target = "_blank" rel="noreferrer">
                        Download Resume
                    </a>
                </li>
            </ul>
        </div>
    )
}

