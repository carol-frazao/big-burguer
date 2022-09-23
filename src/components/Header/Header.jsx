import styled from 'styled-components'
import { FaBars } from 'react-icons/fa';
import Logo from './components/Logo';
import Navbar from './components/Navbar';

const openMenu = () => {
    const btn = document.querySelector('.MenuBtn')
    const nav = document.querySelector('.Navbar')
    btn.onclick = () => {
        setTimeout(() => nav.style.display = "block", 0);
        setTimeout(() => nav.style.right = "0", 100);
    }
}

const Header = () => {
    return (
        <MyHeader>
            <Logo />
            <Navbar />
            <FaBars className='MenuBtn' onClick={openMenu} />
        </MyHeader>
    )
}

const MyHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.5rem;
    background-color: #151515;
    min-height: 4rem;
    text-transform: uppercase;
`

export default Header