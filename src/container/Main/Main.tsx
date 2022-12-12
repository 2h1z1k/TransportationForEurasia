
//import FirstPage from 'pages/FirstPage/FirstPage'
import Home from 'pages/Home/Home'
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
                </Routes>
            </main>
        </>
    )
}

export default Main
