import { Container } from '@mui/material'
import Home from 'pages/Home/Home'
import React from 'react'
import Slider from 'components/Slider/Slider'
import MainMenuOne from 'components/MainMenuOne/MainMenuOne'
import MainMenuTwo from 'components/MainMenuTwo/MainMenuTwo'
import Map from 'components/Map/Map'
import { Routes, Route } from 'react-router-dom'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <main>
                <Routes>
                    <Route path='Home' element={<Home/>}/>
                </Routes>
            </main>
        </>
    )
}

export default Main
