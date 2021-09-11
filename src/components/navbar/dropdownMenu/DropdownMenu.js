import { useState } from "react"
import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState("main");

    const DropdownItem = (props) => {
        return (
            <a href="#" className="menu-item">
                <span className="icon-button"> {props.leftIcon} </span>
                {props.children}
                <span className="icon-right"> {props.rightIcon} </span>
            </a>
        )
    }

    return (
        <div className="dropdown">
            <CSSTransition in={activeMenu === "main"} unmountOnExit className="menu-primary">
                <div className="main">
                    <DropdownItem leftIcon="🥰" rightIcon="↕">Whatever</DropdownItem>
                    <DropdownItem>Whatever</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu
