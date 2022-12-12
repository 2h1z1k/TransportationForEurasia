import React from 'react'
import Slider from 'components/Slider/Slider'
import Movers from 'images/movers.jpg'
import { Container, Toolbar } from '@mui/material'
import './SecondPage.scss'

type Props = {}

const SecondPage = (props: Props) => {
    return (
        <>
            <Slider />
            <div className="background">
                <Container>
                    <Toolbar className="content">
                        <div className="img-box-second-page">
                            <img src={Movers} alt="" />
                        </div>
                        <div className="text">
                            <ol>
                                КОМПАНИЯ TAGLINE GOES HERE ЛИДЕР РЫНКА
                                ЭКСПРЕСС-ДОСТАВКИ ПОСЫЛОК ПО ВСЕЙ ЕВРОПЕ И АЗИИ.
                            </ol>
                            <li>
                                Компания имеет прочные деловые связи со многими
                                странами европы и азии, экспедиторскими и транспортными
                                компаниями. Это позволяет сократить сроки
                                грузоперевозок и минимизировать стоимость услуг
                                доставки грузов. Мы понимаем, как важна для
                                наших Клиентов своевременная доставка грузов в
                                минимальные сроки и с разумными затратами,
                                поэтому мы практикуем индивидуальный подход к
                                каждому Клиенту. Наши сотрудники помогут
                                преодолеть языковой барьер, оформят
                                товарно-сопроводительную документацию и
                                организуют своевременную доставку грузов.
                            </li>
                        </div>
                    </Toolbar>
                </Container>
            </div>
        </>
    )
}

export default SecondPage
