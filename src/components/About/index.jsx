import React from "react";
import Banner from "../Banner";
import element1 from '../../assets/images/element/element-39.png'
import element2 from '../../assets/images/element/element-68.png'
import element3 from '../../assets/images/element/element-60.png'

export default function About() {
    return (
        <>
            <Banner title={"Sobre nosotros"} breadcrum={"Nosotros"} />
            <section className="about-section ptb-120">
                <div className="about-element-one two">
                    <img src={element1} alt="element" />
                </div>
                <div className="container">
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="about-content two">
                                <h3 className="title">¿Quiénes somos?</h3>
                                <p className="para">Somos una distribuidora mayorista de auto-partes
                                    representantes oficiales de la marca Fric-Rot Monroe y SKF
                                    dedicada a satisfacer las necesidades de nuestros clientes
                                    basándonos fuertemente en el servicio, calidad y disponibilidad
                                    de nuestros productos y en la continua innovación.</p>

                                <h3 className="title">Nuestra visión:</h3>
                                <p>Ser la empresa autopartista y agroindustrial más reconocida
                                    del país por innovación y servicios. Ser los más elegidos
                                    por nuestros clientes, proveedores y colaboradores.</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-30">
                            <div className="about-thumb two">
                                <img src={element2}
                                    alt="element" />
                                <div className="about-thumb-element-one">
                                    <img src={element3}
                                        alt="element" />
                                </div>
                                <div className="about-thumb-element-two">
                                    <img src={element3}
                                        alt="element" />
                                </div>
                                <div className="about-thumb-video">
                                    <div className="circle">
                                        <svg version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            x="0px" y="0px" width="300px"
                                            height="300px" viewBox="0 0 300 300"
                                            enable-background="new 0 0 300 300"
                                            xml:space="preserve">
                                            <defs>
                                                <path id="circlePath"
                                                    d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                            </defs>
                                            <circle cx="150" cy="100" r="75"
                                                fill="none" />
                                            <g>
                                                <use xlink:href="#circlePath"
                                                    fill="none" />
                                                <text fill="#ffffff">
                                                    <textpath
                                                        xlink:href="#circlePath">Distrisuper Distrisuper Distrisuper</textpath>
                                                </text>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="video-main">
                                        <a className="video-icon video"
                                            data-rel="lightcase:myCollection"
                                            href="https://www.youtube.com/embed/LRhrNC-OC0Y">
                                            <i className="fas fa-play"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section ptb-120">
                <p className="text-center">*Linea de tiempo con animación scroll*</p>
            </section>
        </>
    );
}