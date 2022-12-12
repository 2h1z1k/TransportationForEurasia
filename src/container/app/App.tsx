import React, {useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import { StyledEngineProvider } from '@mui/material'

type Props = {}

type Like = {
    [id:number]:boolean
}


const App = (props: Props) => {

    const [contactLike, setContactLike] = useState<Like>({
        1:true,
        2:true
    })

    const toggleLikeState = (id:number) => {
        setContactLike((prevState:Like)=> ({
            ...prevState,
            [id]: !prevState[id],
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Main contactLike={contactLike} toggleLikeState={toggleLikeState}/>
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
