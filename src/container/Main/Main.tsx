import AirPage from 'pages/AirPage/AirPage'
import CarPage from 'pages/CarPage/CarPage'
import Home from 'pages/Home/Home'
import SeaPage from 'pages/SeaPage/SeaPage'
import SecondPage from 'pages/SecondPage/SecondPage'
import ThirdPage from 'pages/ThirdPage/ThirdPage'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

type Props = {
    contactLike: {[id:number]:boolean}
    toggleLikeState:(id:number) => void
}

const Main = ({contactLike, toggleLikeState}: Props) => {
    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='SecondPage' element={<SecondPage/>}/>
                    
                    <Route path='ThirdPage' element={<ThirdPage
                    contactLike={contactLike}
                    toggleLikeState={toggleLikeState}

                    />}/>
                    <Route path='AirPage' element={<AirPage/>}/>
                    <Route path='SeaPage' element={<SeaPage/>}/>
                    <Route path='CarPage' element={<CarPage/>}/>
                </Routes>
            </main>
        </>
    )
}

export default Main
