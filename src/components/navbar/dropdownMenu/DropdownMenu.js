import React from 'react'

const DropdownMenu = () => {

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
            <DropdownItem leftIcon="🥰" rightIcon="v">Whatever</DropdownItem>
        </div>
    )
}

export default DropdownMenu
