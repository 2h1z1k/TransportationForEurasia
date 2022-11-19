import React from "react"
import "./Menu.scss"
import MenuItem from "./MenuItem"

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <MenuItem to="/">Услуги</MenuItem>
            <MenuItem to="/FirstPage">О компании</MenuItem>
            <MenuItem to="/SecondPage">Вакансии</MenuItem>
            <MenuItem to="/ThirdPage">Контакты</MenuItem>
        </>
    )
}

export default Menu
