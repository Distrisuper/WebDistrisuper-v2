import React, { useState } from "react";
import logo from '/logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div><a href="#"><img src={logo} className="w-40 lg:w-72" alt="Logo" /></a></div>
                <div className="lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>
                <nav className={`lg:flex lg:items-center ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
                    <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-gray-800 text-center lg:text-left mt-4 lg:mt-0">
                        <li><a href="/" className="hover:text-gray-400">Inicio</a></li>
                        <li><a href="/nosotros" className="hover:text-gray-400">Nosotros</a></li>
                        <li><a href="/productos" className="hover:text-gray-400">Productos</a></li>
                        <li><a href="/contacto" className="hover:text-gray-400">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            {isOpen && (
                <div className="lg:hidden flex flex-col items-center justify-center absolute top-0 left-0 w-full bg-white">
                    <div className="flex justify-between items-center w-full p-4">
                        <a href="#"><img src={logo} className="w-40" alt="Logo" /></a>
                        <button onClick={() => setIsOpen(false)} className="focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <nav>
                        <ul className="flex flex-col space-y-4 text-gray-800 text-center mt-2 mb-6">
                            <li><a href="/" className="hover:text-gray-400">Inicio</a></li>
                            <li><a href="/nosotros" className="hover:text-gray-400">Nosotros</a></li>
                            <li><a href="/productos" className="hover:text-gray-400">Productos</a></li>
                            <li><a href="/contacto" className="hover:text-gray-400">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}
