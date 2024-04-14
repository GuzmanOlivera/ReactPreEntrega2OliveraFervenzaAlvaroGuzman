import { MenuOutlined } from '@ant-design/icons';
import CartWidget from './CartWidget';
import logo from '../img/logo.jpg'; import { useState } from 'react';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="nav-bar z-50">
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
                    <div className="md:hidden absolute top-16  bg-black rounded-md border border-gray-200 shadow-md z-50">
                        <a href="#" className="block py-2 px-4 hover:bg-gray-800 transition-colors">Todos los libros</a>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-800 transition-colors">Programación</a>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-800 transition-colors">Bases de datos</a>
                    </div>
                )}

            </nav>
            <div className="z-50">
                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;
