import styled from 'styled-components'

const Logo = () => {
    return (
        <div className='LogoContainer'>
            <Home href="/">
                <LogoImg src="/images/icons/burguer-logo-icon.png" alt="Image Burguer" />
                <strong> Big Burguer </strong>
            </Home>
        </div>
    )
}

const Home = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #FF9F46;
`
const LogoImg = styled.img`
    max-width: 40px;
`

export default Logo