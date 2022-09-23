import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa"

const closeMenu = () => {
    const closeBtn = document.getElementById('CloseMenuBtn')
    const nav = document.querySelector('.Navbar')
    closeBtn.onclick = () => {
        setTimeout(() => nav.style.right = "-100%", 0)
        setTimeout(() => nav.style.display = "none", 100)
    }
}

const Navbar = () => {
    return (
        <div className='Navbar'>
            <NavList>
                <FaRegWindowClose id='CloseMenuBtn' onClick={closeMenu} />

                <li>
                    <Link to="/inicio"> Início </Link>
                </li>

                <li>
                    <Link to="/burgers"> Burguers </Link>
                </li>

                <li>
                    <Link to="/sobre"> Sobre nós </Link>
                </li>

                <li>
                    <Link to="/contato"> Contato </Link>
                </li>
            </NavList>
        </div>
    )
}

const NavList = styled.ul`
    gap: 1.5rem;
    list-style: none;
    font-size: 22px;
`

export default Navbar