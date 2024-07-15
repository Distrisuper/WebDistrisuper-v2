import React from "react";
import logo from '/logo.png'
export default function Header() {
    return (
        <header className="header-section three">
            <div className="header">
                <div className="header-bottom-area">
                    <div className="container custom-container">
                        <div className="header-menu-content">
                            <nav className="navbar navbar-expand-xl p-0">
                                <a className="site-logo site-title" href="index.html"><img src={logo} width={250} alt="site-logo" /></a>
                                <button className="navbar-toggler d-block d-xl-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="toggle-bar"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <ul className="navbar-nav main-menu">
                                        <li className="menu_has_children">
                                            <a href="/">Inicio</a>
                                        </li>
                                        <li><a href="/nosotros">Nosotros</a></li>

                                        <li><a href="/productos">Productos</a></li>

                                        <li><a href="/contacto">Contacto</a></li>
                                    </ul>
                                    <div className="header-right">
                                        <div className="header-action-area">
                                            <div className="header-action">
                                                <a href="contact.html" className="btn--base">DESCARGÁ LUPA</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}