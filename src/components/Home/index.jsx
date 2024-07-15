import React from "react";
import ellipse from "../../assets/images/home/Ellipse.png"
import home1 from "/general-pico.jpg"
import './styles.css'

export default function Home() {
    return (
        <>
            <section className="banner-section home-three">
                <div className="banner-three-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="container custom-container-three">
                                <div className="home-three-banner">
                                    <img src={ellipse} className="banner-shape z-5 -m-5" alt="" />
                                    <div className="row align-items-end mb-30-none">
                                        <div className="col-xl-5 col-lg-6">
                                            <div className="z-5" data-aos="fade-right" data-aos-duration="1800">
                                                <p>Somos una distribuidora mayorista de auto-partes dedicada a</p>
                                                <h1 className="subtitle">Satisfacer las necesidades de nuestros clientes</h1>
                                                <span></span>
                                            </div>
                                        </div>
                                        <div className="banner-personalizado">
                                            <img src={home1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="container custom-container-three">
                                <div className="home-three-banner">
                                    <img src={ellipse} className="banner-shape z-5 -m-5" alt="" />
                                    <div className="row align-items-end mb-30-none">
                                        <div className="col-xl-5 col-lg-6">
                                            <div className="banner-content-two z-5" data-aos="fade-right" data-aos-duration="1800">
                                                <h1 className="title ">Accelerating Digitality</h1>
                                                <span></span>
                                                <p>We develop software <br /> for you to succeed in a <br /> digital world.</p>
                                            </div>
                                        </div>
                                        <div className="banner-personalizado">
                                            <img src={home1} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="agency-section ptb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="agency-content text-center">
                                <div className="agency-logo-text">
                                    <span>AGENCY</span>
                                </div>
                                <h2 className="title">Softim is a digital agency that
                                    offers a wide scale of
                                    creative services, including brand development
                                    online marketing and lots more.</h2>
                            </div>
                            <div className="agency-statistics-area">
                                <div className="row justify-content-center mb-30-none">
                                    <div
                                        className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                                        <div className="statistics-item">
                                            <div className="statistics-content">
                                                <div className="odo-area">
                                                    <h3 className="odo-title odometer"
                                                        data-odometer-final="12">40</h3>
                                                    <h3 className="title">+</h3>
                                                </div>
                                                <p>Años de experiencia</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                                        <div className="statistics-item">
                                            <div className="statistics-content">
                                                <div className="odo-area">
                                                    <h3 className="odo-title odometer"
                                                        data-odometer-final="256">250</h3>
                                                    <h3 className="title">+</h3>
                                                </div>
                                                <p>Entregas por día</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                                        <div className="statistics-item">
                                            <div className="statistics-content">
                                                <div className="odo-area">
                                                    <h3 className="odo-title odometer"
                                                        data-odometer-final="65">400</h3>
                                                    <h3 className="title">+</h3>
                                                </div>
                                                <p>Localidades alcanzadas</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                                        <div className="statistics-item">
                                            <div className="statistics-content">
                                                <div className="odo-area">
                                                    <h3 className="odo-title odometer"
                                                        data-odometer-final="25">100</h3>
                                                    <h3 className="title">+</h3>
                                                </div>
                                                <p>Pedidos autogestionados</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}