import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import "./styles.css";

export default function Product() {
    const [categories, setCategories] = useState([
        "DIRECCIÓN",
        "LÍQUIDOS",
        "FRENO",
        "TREN DELANTERO",
        "SUSPENSIÓN",
        "TRANSMISIÓN",
        "AGROINDUSTRIA",
        "ENCENDIDO"
    ]);
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (index) => {
        setExpandedCard(index);
    };

    const handleCloseClick = (e) => {
        e.stopPropagation();
        setExpandedCard(null);
    };

    return (
        <>
            <section id="productos" className="bg-base h-auto flex flex-col gap-10 justify-center items-center w-full">
                <h1 className="2xl:text-6xl 2xl:leading-relaxed md:text-5xl text-3xl text-center leading-relaxed md:leading-relaxed mt-16 fade-text text-primary">
                    Nos especializamos en
                </h1>
                <div className="w-10/12 h-[70vh]">
                    <div className="parent h-full">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`div${index + 1} card cursor-pointer text-gray-700 animate-category ${expandedCard === index ? 'expanded' : 'hover:bg-secondary hover:text-white transition-colors hover:drop-shadow-xl'}`}
                                onClick={() => handleCardClick(index)}
                            >
                                <div className="card-inner">
                                    <div className="card-front">
                                        <p className="text-lg lg:text-4xl font-extrabold break-all text-center">{category}</p>
                                    </div>
                                    <div className="card-back">
                                        {expandedCard === index && (
                                            <div className="h-full w-full flex flex-col items-center justify-center relative">
                                                <button
                                                    onClick={handleCloseClick}
                                                    className="absolute top-4 right-4 bg-white h-12 w-12 flex justify-center items-center rounded-full"
                                                    data-tooltip-id="tooltip-cerrar" data-tooltip-content="Cerrar"
                                                >
                                                    <FontAwesomeIcon icon={faTimes} size="lg" color="gray" />
                                                </button>
                                                <Tooltip place="bottom" type="dark" effect="solid" id="tooltip-cerrar" />
                                                <p className="text-lg lg:text-4xl font-extrabold break-all text-center">{category}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <BrandCarousel /> */}
        </>
    );
}
