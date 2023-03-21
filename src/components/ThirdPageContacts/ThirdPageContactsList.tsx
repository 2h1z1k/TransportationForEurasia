import React from 'react'
import './ThirdPageContactsList.scss'
import { Toolbar, Button } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

type Props = {
    name: string
    image: string
    description: string
    isLiked?: boolean
    id:number
    phoneNumber:string
    toggleLikeState:(id:number) => void
}

const ThirdPageContactsList = ({
    id,
    name,
    description,
    image,
    phoneNumber,
    isLiked = false,
    toggleLikeState
}: Props) => {
    return (
        <>
            <Toolbar>
                <div className="contact-menu">
                    <div className="contact-img">
                        <img src={image} alt="" />
                    </div>
                    <div className="contact-text">
                        <li><strong>Имя Фамилия:</strong> {name}</li>
                        <li><strong>Номер телефона:</strong> {phoneNumber}</li>
                        <li><strong>Досье:</strong> {description}</li>
                    </div>
                    <Button
                    onClick={()=> toggleLikeState(id)}
                    style={{
                        color:"#c8a35f"
                    }}>
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                        /
                        Рекомендую
                    </Button>
                </div>
            </Toolbar>
        </>
    )
}

export default ThirdPageContactsList
