import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import './MainMenuOne.scss'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Mainmenuimage from 'images/Mainmenuimage.png'
import Button from '@mui/material/Button'

type Props = {}

const MainMenuOne = (props: Props) => {
    return (
        <>
            <Box className="background">
                <Container>
                    <Toolbar>
                        <div className="text">
                            <h2>Грузоперевозки по европе</h2>
                            <p>Страны Евросоюза, а также Украина,Белоруссия со всеми документами.</p>
                            <Button><a href=""><button>ПОДРОБНЕЕ</button></a></Button>
                        </div>
                        <div className="image">
                            <img src={Mainmenuimage} />
                        </div>
                        <div className="arrow">
                            <div className="arrow-right">
                                <Button><a href="">СЛЕД</a></Button>
                                <i className="arrow right"></i>
                            </div>
                            <div className="arrow-left">
                                <i className="arrow left"></i>
                                <Button><a href="">НАЗАД</a></Button>
                            </div>
                        </div>
                    </Toolbar>
                </Container>
            </Box>
        </>
    )
}

export default MainMenuOne
