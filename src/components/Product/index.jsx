import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import "./styles.css";
import BrandCarousel from "../BrandCarousel";

export default function Product() {
    const [categories, setCategories] = useState([
        "DIRECCIÓN",
        "FRENO",
        "LÍQUIDOS",
        "TRANSMISIÓN",
        "SUSPENSIÓN",
        "ENCENDIDO",
        "AGROINDUSTRIA",
        "TREN DELANTERO"
    ]);
    const [selectedCategory, setSelectedCategory] = useState("TREN DELANTERO");
    const [expandedCard, setExpandedCard] = useState(null);

    const gridAreas = [
        "1 / 1 / 3 / 3",
        "1 / 3 / 2 / 6",
        "2 / 3 / 3 / 6",
        "3 / 1 / 4 / 6",
        "4 / 1 / 5 / 4",
        "5 / 1 / 6 / 4",
        "4 / 4 / 6 / 6"
    ];

    useEffect(() => {
        let interval;

        if (expandedCard === null) {
            interval = setInterval(() => {
                setCategories(prevCategories => {
                    const newCategories = [...prevCategories];
                    const firstCategory = newCategories.shift();
                    newCategories.push(firstCategory);
                    return newCategories;
                });
            }, 4000);
        }

        return () => clearInterval(interval);
    }, [expandedCard]);

    useEffect(() => {
        setSelectedCategory(categories[7]);
    }, [categories]);

    const handleCardClick = (index) => {
        setExpandedCard(index);
    };

    const handleCloseClick = (e) => {
        e.stopPropagation();
        setExpandedCard(null);
    };

    return (
        <>
            <section id="productos" className="bg-base h-auto flex flex-col gap-10 justify-center items-center">
                <h1 className="2xl:text-7xl 2xl:leading-relaxed md:text-6xl text-4xl text-center leading-relaxed md:leading-relaxed mt-16 fade-text text-primary">
                    Nos especializamos en <br /><strong className="font-extrabold">{selectedCategory}</strong>
                </h1>
                <div className="parent mb-16">
                    {categories.slice(0, gridAreas.length).map((category, index) => (
                        <div
                            key={index}
                            className={`div${index + 1} cursor-pointer text-gray-700 animate-category ${expandedCard === index ? 'expanded' : 'hover:bg-secondary hover:text-white transition-all hover:scale-105 '}`}
                            style={{ gridArea: gridAreas[index] }}
                            onClick={() => handleCardClick(index)}
                        >
                            {expandedCard !== null && expandedCard === index ?
                                <>
                                    <div className="h-full w-full flex flex-col items-center justify-center relative">
                                        <button
                                            onClick={handleCloseClick}
                                            className="absolute top-4 right-4 bg-white h-12 w-12 flex justify-center items-center rounded-full"
                                            data-tooltip-id="tooltip-cerrar" data-tooltip-content="Cerrar"
                                        >
                                            <FontAwesomeIcon icon={faTimes} size="lg" color="gray" />
                                        </button>
                                        <Tooltip place="bottom" type="dark" effect="solid" id="tooltip-cerrar" />
                                        <p className="text-lg lg:text-5xl font-extrabold break-all text-center">{category}</p>
                                    </div>
                                </>
                                :
                                <p className="text-lg lg:text-5xl font-extrabold break-all text-center lg:p-2">{category}</p>
                            }
                        </div>
                    ))}
                </div>
            </section>
            {/* <BrandCarousel /> */}
        </>
    );
}
