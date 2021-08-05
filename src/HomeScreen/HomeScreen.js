import React from 'react'
import { motion} from 'framer-motion'
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
import { containerVariants, showFirstVariants, showSecondVariants } from '../Animations'

const HomeScreen = ()=> {
    return (
        <Screen >
            <Nav/>

            <MainContent >
                <MainImgContainer
                    as={motion.div} 
                    variants={showFirstVariants} 
                    initial='hidden'
                    animate='visible'>
                    <MainImg src={FloristImg} />
                    <TextEmphasized>Hanging Garden</TextEmphasized>
                    <TextSecondary>Florist in Bangkok</TextSecondary>
                </MainImgContainer>

                <HeadlineContainer
                    as={motion.div} 
                    variants={showSecondVariants}
                    initial='hidden'
                    animate='visible'>
                    <Subtitle>Explore new opportunities.</Subtitle>
                    <Headline><Emphasis>Grow</Emphasis> your business.</Headline>
                    <Copy><strong>Wiket is the first business to business network</strong> which lets you connect to mind like people.</Copy>
                </HeadlineContainer>
            
            </MainContent>

                <CardOneContainer
                    as={motion.div}
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'>
                    <CardOneImg src={GardenerImg} />
                    <TextEmphasized>Green Thumb</TextEmphasized>
                    <TextSecondary>Gardener in Che Che</TextSecondary>
                </CardOneContainer>

                <CardTwoContainer
                    as={motion.div}
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'>
                    <CardTwoImg src={PotteryImg}  />
                    <TextEmphasized>Potject</TextEmphasized>
                    <TextSecondary>Pottery in Bangkok</TextSecondary>
                </CardTwoContainer>
                
                <CardThreeContainer
                    as={motion.div}
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'>
                    <CardThreeImg src={BaristaImg}   />
                    <TextEmphasized>Green Cafe</TextEmphasized>
                    <TextSecondary>Cafe in Bangkok</TextSecondary>
                </CardThreeContainer>
                
                <Pin1Container
                    as={motion.div}
                    variants={containerVariants}
                    animate='active'>
                    <Pin1/>
                </Pin1Container>

                <Pin2Container
                    as={motion.div}
                    variants={containerVariants}
                    animate='active'>
                    <Pin2/>
                </Pin2Container>

                <LineContainerDesktop  
                    as={motion.div} 
                    variants={showSecondVariants}
                    initial='hidden'
                    animate='visible'>
                    <LineDesktopView/>
                </LineContainerDesktop>

                <LineContainerPhone  
                    as={motion.div} 
                    variants={showSecondVariants}
                    initial='hidden'
                    animate='visible'>
                    <LinePhoneView/>
                </LineContainerPhone>
             
        </Screen>
    )
}

export default HomeScreen
