import styled from 'styled-components'

export const Screen = styled.body`
   position: relative;
   color: #004E4C;
`;

export const MainContent = styled.div`

    @media(max-width: 900px){
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
`

export const HeadlineContainer = styled.div`
    position: absolute;
    left: 781px;
    top: 178px;

    @media(max-width: 900px){
        position: unset;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        text-align: left;
        min-width: 300px;
        height: 141px;
        margin: 90px 30px;
    }
`

export const Subtitle = styled.h5`
    font-family: Spoof Trial;
    font-weight: 400;
    font-size: 30px;
    line-height: 140%;
    margin: 0 ;

    @media(max-width: 900px){
        font-size: 22px;
    }
   `

export const Headline = styled.h1`
    font-family: Spoof Trial;
    font-weight: 700;
    font-size: 98px;
    line-height: 100%;
    letter-spacing: -0.02em;
    margin: 8px 0 0;

    @media(max-width: 900px){
        font-size: 54px;
    }
`

export const Emphasis = styled.span`
    color: #FDA622;
`
export const Copy = styled.p`
    font-family: Faible;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    max-width: 350px;
    height: 90px;
    position: absolute;
    left: 120px;
    top: 440px;

    @media(max-width: 900px){
        position: unset;
        margin-top: 24px;
    }
    
`
export const MainImgContainer = styled.div`
    position: absolute;
    left: 191px;
    top: 178px;
    
    & > p {
        margin-left: 0;
        margin-top: 4px;
    }

    @media(max-width: 900px){
        position: unset;
        display: flex;
        flex-direction: column;

        p:first-of-type {
            font-size: 17px;
            margin-left: 0;
            color: #004E4C;
        }

        p:last-of-type {
            font-size: 15px;
            margin-left: 0;
        }
    }

    @media(min-width: 500px) and (max-width: 900px){
        margin-bottom: 50px;
    }
`

export const MainImg = styled.img`
    width: 416px;
    height: 551px;
    border-radius: 24px;

    @media(max-width: 500px){
        order: 3;
        width: 319px;
        height: 422px;
        margin-top: 12px;
    }
`

export const Img = styled.img`
    border-radius: 10px;
    margin: .5em;
`

export const ImgContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    background: #FFF8EF;
    box-shadow: 0px 24px 42px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
`;

export const CardOneContainer = styled(ImgContainer)`
    width: 146px;
    height: 195px;
    left: 137px;
    top: 356px;

    @media(min-width: 500px) and (max-width: 900px){
        display: none;
    }

    @media(max-width: 500px){
        position: absolute;
        width: 138px;
        height: 185px;
        left: 209px;
        top: 999px; 
    }
`

export const CardOneImg = styled(Img)`
    width: 130px;
    height: 130px;

    @media(max-width: 500px){
        width: 123px;
        height: 120px;
    }
`

export const CardTwoContainer = styled(ImgContainer)`
    width: 146px;
    height: 168px;
    left: 515px;
    top: 218px;

    @media(min-width: 500px) and (max-width: 900px){
        display: none;
    }

    @media(max-width: 900px){
        position: absolute;
        width: 140px;
        height: 162px;
        left: 51px;
        top: 863px; 
    }
`

export const CardTwoImg = styled(Img)`
    width: 130px;
    height: 100px;

    @media(max-width: 500px){
        width: 126px;
        height: 100px;
    }
`

export const CardThreeContainer = styled(ImgContainer)`
    width: 146px;
    height: 165px;
    left: 569px;
    top: 524px;

    @media(min-width: 500px) and (max-width: 900px){
        display: none;
    }

    @media(max-width: 700px){
        width: 145px;
        height: 168px;
        left: 28px;
        top: 1089px;
    }
`

export const CardThreeImg = styled(Img)`
    width: 130px;
    height: 100px;
`

export const TextEmphasized = styled.p`
    font-family: Faible;
    font-size: 17px;
    font-weight: 700;
    margin: 0 0 0 8px;

    @media(max-width: 700px){
        font-size: 15px;   
        color: #333333;
    }
`

export const TextSecondary = styled.p`
    font-family: Faible;
    font-size: 13px;
    font-weight: 500;
    line-height: 150%;
    margin: 0 0 0 8px;
`

export const Pin1Container = styled.div`
    position: absolute;
    width: 48.44px;
    height: 41.61px;
    left: 630px;
    top: 455px;

    @media(max-width: 900px){
       display: none;
    }
`

export const Pin2Container = styled.div`
    position: absolute;
    width: 38.69px;
    height: 53.5px;
    left: 137px;
    top: 279px;

    @media(max-width: 900px){
        display: none;
    }
`

export const LineContainerDesktop = styled.div`
    position: absolute;
    z-index: -5;
    width: 226.68px;
    height: 421.49px;
    left: 658px;
    top: 571px;

    @media(max-width: 900px){
       display: none;
    }
`

export const LineContainerPhone = styled.div`
    position: absolute;
    z-index: -5;
    width: 210.75px;
    height: 425px;
    left: 109.26px;
    top: 978px;
    padding-bottom: 500px;

    @media(min-width: 500px){
        display: none;
    }
`