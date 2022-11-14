import React from 'react'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
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
            <div className='background'>
                <Container>
                    <Toolbar><h2>УСЛУГИ</h2></Toolbar>
                    <Toolbar className='menu'>
                        {mainMenuTwoItem.map(
                            ({
                                name,
                                description,
                                image,
                            }: MainMenuTwoProps, i) => (
                                <MainMenuTwoListItem
                                    key={i}
                                    name={name}
                                    description={description}
                                    image={image}
                                />
                            )
                        )}
                    </Toolbar>
                </Container>
            </div>
        </>
    )
}

export default MainMenuTwo