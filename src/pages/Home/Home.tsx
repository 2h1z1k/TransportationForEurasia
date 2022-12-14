import React from 'react'
import Slider from "components/Slider/Slider"
import MainMenuTwo from "components/MainMenuTwo/MainMenuTwo"
import Reviews from 'components/Reviews/Reviews'
import Map from "components/Map/Map"

type Props = {
}

const Home = (props: Props) => {
    return (
        <>
            <Slider/>
            <MainMenuTwo/>
            <Map/>
            <Reviews name={''} text={''}/>
        </>
    )
}

export default Home
