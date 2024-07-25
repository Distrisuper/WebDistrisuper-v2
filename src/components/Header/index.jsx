import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '/logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY < 100) {
                setIsVisible(true);
            } else if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`bg-white/90 p-4 fixed w-full z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <a href="#"><img src={logo} className="w-40" alt="Logo" /></a>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
                    </button>
                </div>
                <nav className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-gray-800 text-center lg:text-left mt-4 lg:mt-0">
                        <li><a href="/" className="hover:text-gray-400">Inicio</a></li>
                        <li><a href="#productos" className="hover:text-gray-400">Productos</a></li>
                        <li><a href="#nosotros" className="hover:text-gray-400">Nosotros</a></li>
                        <li><a href="#contacto" className="hover:text-gray-400">Contacto</a></li>
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
                            <li><a href="/" className="hover:text-gray-400">Inicio</a></li>
                            <li><a href="#nosotros" className="hover:text-gray-400">Nosotros</a></li>
                            <li><a href="#productos" className="hover:text-gray-400">Productos</a></li>
                            <li><a href="#contacto" className="hover:text-gray-400">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
