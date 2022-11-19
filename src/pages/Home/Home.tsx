import React from 'react'
import Slider from "components/Slider/Slider"
import MainMenuOne from "components/MainMenuOne/MainMenuOne"
import MainMenuTwo from "components/MainMenuTwo/MainMenuTwo"
import Map from "components/Map/Map"

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Slider></Slider>
            <MainMenuOne></MainMenuOne>
            <MainMenuTwo></MainMenuTwo>
            <Map></Map>
            
        </>
    )
}

export default Home
