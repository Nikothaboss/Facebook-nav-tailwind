import { useState } from "react"
import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState("main");

    const DropdownItem = (props) => {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button"> {props.leftIcon} </span>
                {props.children}
                <span className="icon-right"> {props.rightIcon} </span>
            </a>
        )
    }

    return (
        <div className="dropdown">
            <CSSTransition in={activeMenu === "main"} unmountOnExit timeout={500} className="menu-primary">
                <div className="main">
                    <DropdownItem leftIcon="🥰" rightIcon="↕" goToMenu="settings">Whatever</DropdownItem>
                    <DropdownItem leftIcon="😏 " goToMenu="settings">Settings</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === "settings"} timeout={500} unmountOnExit className="menu-secondary" >
                <div className="main">
                    <DropdownItem goToMenu="main"></DropdownItem>
                    <DropdownItem goToMenu="main"></DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu
