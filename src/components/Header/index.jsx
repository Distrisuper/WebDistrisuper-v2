import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '/logo.png';
import logoBlanco from '/logo-blanco.webp';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showHeader, setShowHeader] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 100);

            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setShowHeader(false);
            } else {
                // Scrolling up
                setShowHeader(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`p-4 fixed w-full z-[999] transition-all duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-white text-gray-800' : 'bg-transparent text-white'}`}>
            <div className="flex justify-between items-center">
                <div>
                    <a href="#"><img src={isScrolled ? logo : logoBlanco} className="w-52 lg:ml-20" alt="Logo" /></a>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                    </button>
                </div>
                <nav className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto lg:mr-12`}>
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-center lg:text-left mt-4 lg:mt-0">
                        <li><a href="#inicio" className="hover:text-blue-500 transition-all">Inicio</a></li>
                        <li><a href="#productos" className="hover:text-blue-500 transition-all">Productos</a></li>
                        <li><a href="#nosotros" className="hover:text-blue-500 transition-all">Nosotros</a></li>
                        <li><a href="#contacto" className="hover:text-blue-500 transition-all">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center justify-center absolute top-0 left-0 w-full bg-white">
                    <div className="flex justify-between items-center w-full p-4">
                        <a href="#"><img src={logo} className="w-40" alt="Logo" /></a>
                        <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                            <FontAwesomeIcon icon={faTimes} size="lg" />
                        </button>
                    </div>
                    <nav>
                        <ul className="flex flex-col space-y-4 text-gray-800 text-center mt-2 mb-6">
                            <li><a href="#inicio" className="hover:text-blue-500 transition-all">Inicio</a></li>
                            <li><a href="#nosotros" className="hover:text-blue-500 transition-all">Nosotros</a></li>
                            <li><a href="#productos" className="hover:text-blue-500 transition-all">Productos</a></li>
                            <li><a href="#contacto" className="hover:text-blue-500 transition-all">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
