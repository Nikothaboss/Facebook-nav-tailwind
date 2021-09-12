import { useState, useEffect, useRef } from "react"
import { CSSTransition } from "react-transition-group";

const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null)
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    const calcHeight = (element) => {
        const height = element.offsetHeight;
        setMenuHeight(height);
    }

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
        <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

            <CSSTransition
                in={activeMenu === "main"}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem
                        leftIcon="🥰"
                        rightIcon="↕"
                        goToMenu="settings">Whatever</DropdownItem>
                    <DropdownItem
                        leftIcon="😏 "
                        goToMenu="settings">Settings</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "settings"}
                timeout={500}
                unmountOnExit
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon="↩ "></DropdownItem>
                    <DropdownItem goToMenu="main"></DropdownItem>
                    <DropdownItem goToMenu="main"></DropdownItem>
                    <DropdownItem goToMenu="main"></DropdownItem>
                    <DropdownItem goToMenu="main"></DropdownItem>
                    <DropdownItem goToMenu="main"></DropdownItem>
                    <DropdownItem goToMenu="main"></DropdownItem>
                    <DropdownItem goToMenu="main"></DropdownItem>
                </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu
