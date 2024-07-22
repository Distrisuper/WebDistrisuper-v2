import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '/logo.png'
export default function Footer() {
    return (
        <>
            <footer className="pt-28 relative bg-gray-100">
                <div className="container mx-auto">
                    <img src={logo} width={300} />
                </div>

                <div className="container mx-auto py-8">
                    <div className="flex flex-wrap justify-between mb-8">
                        <ul className="flex space-x-4 mb-4">
                            <li>
                                <a href="https://www.facebook.com/distrisuper" className="text-blue-400 border border-blue-400 rounded-full p-3 h-12 w-12 flex items-center justify-center hover:text-blue-600 hover:border-blue-600">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/distrisuperautopartes/" className="text-blue-400 border border-blue-400 rounded-full p-3 h-12 w-12 flex items-center justify-center hover:text-blue-600 hover:border-blue-600">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info.distrisuper@gmail.com" className="text-blue-400 border border-blue-400 rounded-full p-3 h-12 w-12 flex items-center justify-center hover:text-blue-600 hover:border-blue-600">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send/?phone=5492236208620&text&type=phone_number&app_absent=0" className="text-blue-400 border border-blue-400 rounded-full p-3 h-12 w-12 flex items-center justify-center hover:text-blue-600 hover:border-blue-600">
                                    <FontAwesomeIcon icon={faPhone} />
                                </a>
                            </li>
                        </ul>

                        <div className="w-full lg:w-1/4 md:w-1/2 mb-8">
                            <div className="text-gray-700">
                                <h4 className="text-lg font-bold mb-4">Links</h4>
                                <ul className="space-y-2">
                                    <li><a href="#0" className="hover:text-gray-400">Inicio</a></li>
                                    <li><a href="#0" className="hover:text-gray-400">Nosotros</a></li>
                                    <li><a href="#0" className="hover:text-gray-400">Productos</a></li>
                                    <li><a href="#0" className="hover:text-gray-400">Contacto</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 pb-6">
                    <p>
                        Copyright © 2024
                        Distrisuper -
                        Todos los derechos reservados
                    </p>
                </div>
            </footer>
        </>
    );
}
