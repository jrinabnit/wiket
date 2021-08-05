import React from 'react'
import { motion} from 'framer-motion'
import { CtaButton, NavContainer, Link, LinksContainer, LogoContainer, HamburgerMenu} from './Nav.styles'
import { ReactComponent as Logo } from '../../assets/svg/wiket-logo.svg';
import { showSecondVariants } from '../../Animations'

const Nav = ()=> {
    return (
        <NavContainer 
                as={motion.div} 
                variants={showSecondVariants}
                initial='hidden'
                animate='visible'>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <LinksContainer>
                <Link to='#'>Benefits</Link>
                <Link to='#'>Your profile</Link>
                <Link to='#'>Connections</Link>
                <Link to='#'>Plans & Pricing</Link>
                <CtaButton to='#'>Get Started</CtaButton>
            </LinksContainer>
            <HamburgerMenu>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
            </HamburgerMenu>
        </NavContainer>
    )
}

export default Nav;
