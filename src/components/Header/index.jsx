import React from "react";
import logo from '/logo.png'

export default function Header() {
    return (
        <header className="bg-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div><a href="#"><img src={logo} width="300px" /></a></div>
                <nav className="flex space-x-4 py-4">
                    <ul className="flex space-x-4 text-gray-800">
                        <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
                        <li><a href="#" className="hover:text-gray-400">Nosotros</a></li>
                        <li><a href="#" className="hover:text-gray-400">Productos</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
