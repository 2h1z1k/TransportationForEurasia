import React from 'react'
import ThirdPageContactsArray from "components/ThirdPageContacts/ThirdPageContactsArray"
import ThirdPageContactsList    from "components/ThirdPageContacts/ThirdPageContactsList"
import {Container, Toolbar, Grid} from "@mui/material"
import "./ThirdPageContacts.scss"


type ThirdPageContactsProps ={
    name:string
    image:string
    description:string
    id:number
}


type Props = {
    contactLike: {[id:number]:boolean}
    toggleLikeState:(id:number) => void
}

const ThirdPageContacts = ({contactLike, toggleLikeState}: Props) => {
  return (
    <>
    <div className="backgroung">
        <Container>
            <h2 className='h2'>Контакты</h2>
            <Toolbar className='thirdMenu'>
                {ThirdPageContactsArray.map(
                    ({
                        name,
                        description,
                        image,
                        id,
                    }:ThirdPageContactsProps) => (
                        <Grid item key={id}>
                        <ThirdPageContactsList
                        id={id}
                        name={name}
                        description={description}
                        image={image}
                        isLiked={contactLike[id]}
                        toggleLikeState={toggleLikeState}
                        />
                        </Grid>
                    )
                )}
            </Toolbar>
        </Container>
        </div>
    </>
  )
}

export default ThirdPageContacts