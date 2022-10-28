import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import './MainMenuTwo.scss'
import MainMenuTwoListItem from './MainMenuTwoListItem'
import mainMenuTwoItem from './mainMenuTwoItem'

type MainMenuTwoProps = {
    name: string
    image: string
    description: string
}
type Props = {
}

const MainMenuTwo = (props: Props) => {
    return (
        <>
            <Box className='background'>
                <Container>
                    <Toolbar><h2>УСЛУГИ</h2></Toolbar>
                    <Toolbar className='menu'>
                        {mainMenuTwoItem.map(
                            ({
                                name,
                                description,
                                image,
                            }: MainMenuTwoProps) => (
                                <MainMenuTwoListItem
                                    name={name}
                                    description={description}
                                    image={image}
                                />
                            )
                        )}
                    </Toolbar>
                </Container>
            </Box>
        </>
    )
}

export default MainMenuTwo