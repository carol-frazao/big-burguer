import { FaBars } from 'react-icons/fa';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa"

const openMenu = () => {
    const btn = document.querySelector('.MenuBtn')
    const nav = document.querySelector('.Navbar')
    btn.onclick = () => {
        setTimeout(() => nav.style.display = "block", 0);
        setTimeout(() => nav.style.right = "0", 100);
    }
}
const closeMenu = () => {
    const closeBtn = document.getElementById('CloseMenuBtn')
    const nav = document.querySelector('.Navbar')
    closeBtn.onclick = () => {
        setTimeout(() => nav.style.right = "-100%", 0)
        setTimeout(() => nav.style.display = "none", 100)
    }
}

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar = () => setShowNavbar(!showNavbar)

    return (
        <header>
            <div className='logo-container'>
                <Link to="/">
                    <img src="/images/icons/burguer-logo-icon.png" alt="Logo" />
                    <strong> Big Burguer </strong>
                </Link>
            </div>
            <div className='nav-header'>
                <ul>
                    {/* <FaRegWindowClose className='close-menu' onClick={handleShowNavbar} /> */}
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
                </ul>
            </div>
            <FaBars className='menu-btn' onClick={handleShowNavbar} />
        </header>
    )
}

export default Header