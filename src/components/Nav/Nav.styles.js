import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 4em;
    padding-right: 3em;

    @media(max-width: 450px) {
        padding: 1.5em;
    }
`

export const LogoContainer = styled.a`
    width: 123.9px;
    height: 35.9px;
    margin-top: 2em;

    @media(max-width: 900px) {
        width: 101px;
        height: 29px;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 740px;
    height: 49px;
    margin-top: 1.6em;

    @media(max-width: 900px) {
        justify-content: flex-end;
    }
`

export const Link = styled.a`
    cursor: pointer;
    font-family: Cera Pro;
    font-weight: 700;
    font-size: 17px;
    flex-shrink: 2;
    margin-left: 18px;

    @media(max-width: 900px) {
        display: none;
    }
`

export const CtaButton = styled.button`
    color: #FFF8EF;
    background: #FAA834;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 141px;
    height: 49px;
    font-family: Cera Pro;
    font-weight: 700;
    font-size: 17px;
    flex-shrink: 3;

    @media(max-width: 900px) {
        width: 115px;
        height: 40px;
    }
`

export const HamburgerMenu = styled.div` 
    display: none;
    cursor: pointer;
    margin-top: 32px;
    margin-left: 21px;

    & > div {
        height: 3px;
        background-color: #004E4C;
        margin: 3px 0;
    }

    & > .bar1 {
        width: 27px;
    }

     & > .bar2 {
        width: 33px;
    }

     & > .bar3 {
        width: 22px;
    }

    @media(max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
`