import React from 'react'
import MainMenuItems from './MainMenuItems'
import {Container} from "@mui/material"
import './MainMenu.scss'
import Air from 'images/Air.jpg'
import AirHover from 'images/Air-hover.jpg'

type Props = {}

const MainMenu = (props: Props) => {
    return (
        <>
        <Container>
            <MainMenuItems to="/">
                <div className="buttonBack">back</div>
            </MainMenuItems>
            <MainMenuItems to="/AirPage">
                <div className="box">
                <div className="content-menu">
                    <div className="img-box">
                        <img src={Air} alt="" className="air" />
                        <img src={AirHover} alt="" className="airHover" />
                    </div>
                    <div className="text">Авиаперевозки</div>
                </div></div>
            </MainMenuItems>
            <MainMenuItems to="/CarPage">
                <div className="box">
                <div className="content-menu">
                    <div className="img-box">
                        <img src={Air} alt="" className="air" />
                        <img src={AirHover} alt="" className="airHover" />
                    </div>
                    <div className="text">Наземные перевозки</div>
                </div></div>
            </MainMenuItems>
            <MainMenuItems to="/SeaPage">
            <div className="box">
                <div className="content-menu">
                    <div className="img-box">
                        <img src={Air} alt="" className="air" />
                        <img src={AirHover} alt="" className="airHover" />
                    </div>
                    <div className="text">Перевозки по воде</div>
                </div></div>
            </MainMenuItems>
            </Container>
        </>
    )
}

export default MainMenu
