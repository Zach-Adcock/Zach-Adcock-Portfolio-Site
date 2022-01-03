import "./menu.scss";


export default function Menu(props) {
    return (
        <div className={"menu " + (props.menuActive && "active")}>
            <ul>
                <li onClick={() => props.setMenuActive(!props.menuActive)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => props.setMenuActive(!props.menuActive)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => props.setMenuActive(!props.menuActive)}>
                    <a href="#works">Works</a>
                </li>
                <li onClick={() => props.setMenuActive(!props.menuActive)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

