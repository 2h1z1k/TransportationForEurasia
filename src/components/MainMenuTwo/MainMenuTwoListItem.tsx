import React from 'react'
import Button from '@mui/material/Button'
import './MainMenuTwoList.scss'
import Air from 'images/Air.jpg'
import AirHover from 'images/Air-hover.jpg'
import MainMenuItems from "components/MainMenu/MainMenuItems"

type Props = {
    name: string
    description: string
    image: string

}

const MainMenuTwoListItem = ({
    name,
    description,
    image,
    
}: Props) => {
    return (
        <>
            <Button>
                    <div className="content-menu">
                        <div className="img-box">
                            <img src={Air} alt={name} className='air' />
                            <img src={AirHover} alt={name} className='airHover' />
                        </div>
                        <div className="text">{description}</div>
                    </div>
            </Button>

        </>
    )
}

export default MainMenuTwoListItem