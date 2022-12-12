import React from 'react'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import './MainMenuTwo.scss'
import MainMenuTwoListItem from './MainMenuTwoListItem'
import mainMenuTwoItem from './mainMenuTwoItem'
import Button from '@mui/material/Button'

type MainMenuTwoProps = {
    name: string
    image: string
    description: string
}
type Props = {}

const MainMenuTwo = (props: Props) => {
    return (
        <>
            <div className="background">
                <Container>
                    <Toolbar>
                        <h2>Грузоперевозки по Европе и Азии</h2>
                    </Toolbar>
                    <Toolbar className="menu">
                        {mainMenuTwoItem.map(
                            (
                                { name, description, image }: MainMenuTwoProps,
                                i
                            ) => (
                                <MainMenuTwoListItem
                                    key={i}
                                    name={name}
                                    description={description}
                                    image={image}
                                />
                            )
                        )}
                    </Toolbar>
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
