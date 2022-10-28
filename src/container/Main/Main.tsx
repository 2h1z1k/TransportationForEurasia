import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import React from 'react'
import Slider from 'components/Slider/Slider'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import MainMenuOne from 'components/MainMenuOne/MainMenuOne'
import MainMenuTwo from 'components/MainMenuTwo/MainMenuTwo'
import Map from 'components/Map/Map'
import { type } from 'os'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Slider />
            <MainMenuOne />
            <MainMenuTwo />
            <Map />
        </>
    )
}

export default Main
