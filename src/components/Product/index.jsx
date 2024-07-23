import React, { useState, useEffect, useRef } from "react";
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

    return (
        <>
            <div className="bg-base h-auto flex flex-col gap-10 justify-center items-center">
                <h1 className="2xl:text-8xl 2xl:leading-relaxed text-7xl text-center leading-relaxed md:mt-24 md:mb-12 fade-text text-primary">
                    Nos especializamos en <br /><strong className="font-extrabold">{selectedCategory}</strong>
                </h1>
                <div className="parent mb-16">
                    {categories.slice(0, gridAreas.length).map((category, index) => (
                        <div
                            key={index}
                            className={`div${index + 1} cursor-pointer text-gray-700 hover:bg-secondary hover:text-white transition-all hover:scale-105 animate-category ${expandedCard === index ? 'expanded' : ''}`}
                            style={{ gridArea: gridAreas[index] }}
                            onClick={() => handleCardClick(index)}

                        >
                            {expandedCard !== null ?
                                <>
                                    <div className="h-full w-full flex flex-col items-center justify-">
                                        <p onClick={() => handleCardClick(null)} className="p-4 bg-white">Cerrar</p>
                                        <p className="text-5xl font-extrabold break-all">{category}</p>
                                    </div>

                                </>
                                :
                                <p className="text-5xl font-extrabold break-all">{category}</p>
                            }
                        </div>
                    ))}
                </div >
            </div >
            <BrandCarousel />
        </>
    );
}
