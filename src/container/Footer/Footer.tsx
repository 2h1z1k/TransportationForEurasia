import React from 'react'
import Box from '@mui/material/Box'
import { Container, Toolbar} from '@mui/material'
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
