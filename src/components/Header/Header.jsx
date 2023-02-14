import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from "react-icons/ai"

const Header = (props) => {
    const {
        handleShowNavbar,
        showNavbar,
        hideNav
    } = props

    return (
        <div className='header-container'>
            <div className='logo-container'>
                <a href="/">
                    <img src="/images/icons/burguer-logo-icon.png" alt="Logo" />
                    <strong> Big Burguer </strong>
                </a>
            </div>
            <div className={`nav-header ${!showNavbar && 'hideNav'}`}>
                <ul>
                    <AiOutlineClose className='close-menu' onClick={handleShowNavbar} />
                    <li>
                        <Link to="/inicio" onClick={hideNav}> Início </Link>
                    </li>
                    <li>
                        <Link to="/burgers" onClick={hideNav}> Burguers </Link>
                    </li>
                    <li>
                        <Link to="/sobre" onClick={hideNav}> Sobre nós </Link>
                    </li>
                    <li>
                        <Link to="/contato" onClick={hideNav}> Contato </Link>
                    </li>
                </ul>
            </div>
            <FaBars className='menu-btn' onClick={handleShowNavbar} />
        </div>
    )
}

export default Header