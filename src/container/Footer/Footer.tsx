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
                        <div><p>sales@log.ru</p> </div>
                        <div><div>
                            <li>+7 (812) 344-56-65</li>
                            <li>+7 (812) 355-56-65</li>
                        </div></div>
                        <div><ol>Разработано - D-E-N.ru</ol></div>
                        <dl>1</dl>
                    </Toolbar>
                </Container>
            </Box>
            
        </>
    )
}

export default Footer
