import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import React from 'react'
import Slider from 'components/Slider/Slider'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import MainMenuOne from 'components/Mainmenu/Mainmenu'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <Slider />
            <MainMenuOne />
        </>
    )
}

export default Main
