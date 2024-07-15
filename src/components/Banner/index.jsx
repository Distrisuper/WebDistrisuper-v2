import React from "react";
import element4 from '../../assets/images/element/element-69.png'
import element5 from '../../assets/images/element/element-70.png'
import './styles.css'


export default function Banner({ title, breadcrum }) {
    return (
        <section className="banner-section two inner">
            <div className="banner-element-twenty-two two">
                <img src={element4} alt="element" />
            </div>
            <div className="banner-element-twenty-three two">
                <img src={element5} alt="element" />
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center mb-30-none">
                    <div className="col-xl-12 mb-30">
                        <div className="banner-content two">
                            <div className="banner-content-header">
                                <h2 className="title text-white" style={{ fontSize: 60 }}>{title}</h2>
                                <div className="breadcrumb-area">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">{breadcrum}</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}