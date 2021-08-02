import React from 'react'
import { Screen, Subtitle, Headline, Emphasis, HeadlineContainer, Copy, MainImg, MainContent, MainImgContainer, TextEmphasized, TextSecondary, CardOneContainer, CardTwoContainer, CardThreeContainer , CardOneImg, CardTwoImg, CardThreeImg, Pin1Container, Pin2Container, LineContainerDesktop, LineContainerPhone } from './HomeScreen.styles'
import  Nav  from '../components/Nav/Nav'
import FloristImg from '../assets/jpg/header-img-florist.jpg'
import GardenerImg from '../assets/jpg/header-img-gardener.jpg'
import BaristaImg from '../assets/jpg/header-img-barista.jpg'
import PotteryImg from '../assets/jpg/header-img-pottery.jpg'
import { ReactComponent as Pin1} from '../assets/svg/pin-01.svg'
import { ReactComponent as Pin2} from '../assets/svg/pin-02.svg'
import { ReactComponent as LineDesktopView} from '../assets/svg/header-line-desktop.svg'
import { ReactComponent as LinePhoneView} from '../assets/svg/header-line-phone-portrait.svg'

const HomeScreen = ()=> {
    return (
        <Screen>
            <Nav/>
            <MainContent>
                
                <MainImgContainer>
                    <MainImg src={FloristImg} />
                    <TextEmphasized>Hanging Garden</TextEmphasized>
                    <TextSecondary>Florist in Bangkok</TextSecondary>
                </MainImgContainer>

                <HeadlineContainer>
                    <Subtitle>Explore new opportunities.</Subtitle>
                    <Headline><Emphasis>Grow</Emphasis> your business.</Headline>
                    <Copy><strong>Wiket is the first business to business network</strong> which lets you connect to mind like people.</Copy>
                </HeadlineContainer>
            
            </MainContent>

                    <CardOneContainer>
                    <CardOneImg src={GardenerImg} />
                    <TextEmphasized>Green Thumb</TextEmphasized>
                    <TextSecondary>Gardener in Che Che</TextSecondary>
                </CardOneContainer>

                <CardTwoContainer>
                    <CardTwoImg src={PotteryImg}  />
                    <TextEmphasized>Potject</TextEmphasized>
                    <TextSecondary>Pottery in Bangkok</TextSecondary>
                </CardTwoContainer>
                    
                <CardThreeContainer>
                    <CardThreeImg src={BaristaImg}   />
                    <TextEmphasized>Green Cafe</TextEmphasized>
                    <TextSecondary>Cafe in Bangkok</TextSecondary>
                </CardThreeContainer>
                
                <Pin1Container><Pin1/></Pin1Container>
                <Pin2Container><Pin2/></Pin2Container>
                <LineContainerDesktop><LineDesktopView/></LineContainerDesktop>
                <LineContainerPhone><LinePhoneView/></LineContainerPhone>
        </Screen>
    )
}

export default HomeScreen
