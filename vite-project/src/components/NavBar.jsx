import { MenuOutlined } from '@ant-design/icons';
import CartWidget from './CartWidget';
import logo from '../img/logo.jpg'; import { useState } from 'react';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="nav-bar">
            <h1 id="title" className="mainTitle">CodeBook Emporium</h1>
            <a href="/" className="logo-container">
                <img src={logo} alt="Logo" className="logo-img" />
            </a>
            <nav className="nav-menu flex items-center">
                {/* Desktop Menu */}
                <div className="desktop-menu hidden">
                    <a href="#">Todos los libros</a>
                    <a href="#">Programación</a>
                    <a href="#">Bases de datos</a>
                </div>
                {/* Mobile menu */}
                <MenuOutlined className="mobile-menu md:hidden text-gray-700 hover:text-gray-900" onClick={toggleMobileMenu} />
                {isMobileMenuOpen && (
                    <div className="reset mobile-menu flex flex-col mt-12 bg-white border border-gray-200 rounded-md">
                        <a href="#" className="menu-link">Todos los libros</a>
                        <a href="#" className="menu-link">Programación</a>
                        <a href="#" className="menu-link">Bases de datos</a>
                    </div>
                )}

            </nav>
            <div className="md:hidden">
                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;
