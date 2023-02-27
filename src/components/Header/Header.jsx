import { Link, animateScroll as scroll } from "react-scroll"
import { AiOutlineClose } from "react-icons/ai"
import { CgMenuCheese } from 'react-icons/cg'

const Header = (props) => {
    const {
        handleShowNavbar,
        showNavbar,
        hideNav
    } = props

    const scrollToTop = () => scroll.scrollToTop()

    return (
        <div className='header-container'>
            <div className='logo-container'>
                <Link onClick={scrollToTop}>
                    <img src="/images/icons/burguer-logo-icon.png" alt="Logo" />
                    <strong> Big Burguer </strong>
                </Link>
            </div>
            <div className={`nav-header ${!showNavbar && 'hideNav'}`}>
                <ul>
                    <AiOutlineClose className='close-menu' onClick={handleShowNavbar} />
                    <li>
                        <Link
                        onClick={hideNav}
                        activeClass="active"
                        to="intro"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={600}
                        >
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link
                        // to="/burgers"
                        onClick={hideNav}
                        activeClass="active"
                        to="burguers"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={600}
                        >
                            Burguers
                        </Link>
                    </li>
                    <li>
                        <Link
                        // to="/sobre"
                        onClick={hideNav}
                        activeClass="active"
                        to="about-us"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={600}
                        >
                            Sobre nós
                        </Link>
                    </li>
                    <li>
                        <Link
                        // to="/contato"
                        onClick={hideNav}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={600}
                        >
                            Contato
                        </Link>
                    </li>
                </ul>
            </div>
            <CgMenuCheese className='menu-btn' onClick={handleShowNavbar} />
        </div>
    )
}

export default Header