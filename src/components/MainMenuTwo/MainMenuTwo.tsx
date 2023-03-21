import React from 'react'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import './MainMenuTwo.scss'
import MainMenu from 'components/MainMenu/MainMenu'


type Props = {}

const MainMenuTwo = (props: Props) => {
    return (
        <>
            <div className="background">
                <Container>
                    <Toolbar>
                        <h2>Грузоперевозки по Европе и Азии</h2>
                    </Toolbar>
                    <MainMenu/>
                    <div className="text">
                        <p>
                            Страны Евросоюза, a также Украина,Белоруссия со
                            всеми документами.
                        </p>
                        
                            <a href="https://2h1z1k.github.io/Market3/">
                                <button>ПОДРОБНЕЕ</button>
                            </a>     
                    </div>
                </Container>
            </div>
        </>
    )
}

export default MainMenuTwo
