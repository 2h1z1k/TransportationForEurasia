import React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import { Container, Toolbar, IconButton } from '@mui/material'
import './Footer.scss'




type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <Box className='background-footer'>
                <Container>
                    <Toolbar className='footer-toolbar'>
                        <a href=""><p>sales@log.ru</p> </a>
                        <a href=""><div>
                            <li>+7 (812) 344-56-65</li>
                            <li>+7 (812) 355-56-65</li>
                        </div></a>
                        <a href=""><ol>Разработано - D-E-N.ru</ol></a>
                    </Toolbar>
                </Container>
            </Box>
        </>
    )
}

export default Footer
