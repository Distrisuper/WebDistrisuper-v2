import React from "react";
import element1 from '../../assets/images/element/element-48.png';
import logo from '/logo.png';

export default function Footer() {
    return (
        <>
            <footer className="footer-section pt-120">
                <div className="footer-element-one">
                    <img src={element1} alt="element" />
                </div>

                <div className="container">
                    <div className="row mb-30-none">
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a className="site-logo site-title"
                                        href="index.html"><img
                                            src={logo}
                                            alt="site-logo" /></a>
                                </div>

                                <ul className="footer-social">
                                    <li><a href="https://www.facebook.com/distrisuper"><i
                                        className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.instagram.com/distrisuperautopartes/"><i
                                        className="fab fa-instagram"></i></a></li>
                                    <li><a href="mailto:info.distrisuper@gmail.com"><i
                                        className="fas fa-envelope"></i></a></li>
                                    <li><a href="https://api.whatsapp.com/send/?phone=5492236208620&text&type=phone_number&app_absent=0 "><i
                                        className="fas fa-phone"></i></a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">

                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-30">

                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                            <div className="footer-widget">
                                <h4 className="title">Links</h4>
                                <ul className="footer-list">
                                    <li><a href="#0">Inicio</a></li>
                                    <li><a href="#0">Nosotros</a></li>
                                    <li><a href="#0">Productos</a></li>
                                    <li><a href="#0">Contacto</a></li>
                                    <li><a href="#0">Descargar Lupa</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrapper">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-12 text-center">
                                <div className="copyright-area">
                                    <p>Copyright © 2024 <a
                                        href="index.html">Distrisuper</a>. Todos los derechos reservados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}