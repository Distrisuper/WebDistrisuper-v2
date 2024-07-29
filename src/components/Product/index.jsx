import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import BrandCarousel from "../BrandCarousel"
import "./styles.css";

export default function Product() {
    const categories = [
        "SUSPENSIÓN",
        "DIRECCIÓN",
        "FRENO",
        "LÍQUIDOS",
        "ENCENDIDO",
        "TRANSMISIÓN",
        "AGROINDUSTRIA",
        "COMPLEMENTARIOS"
    ];

    const details = {
        "SUSPENSIÓN": {
            "productos": [
                "Amortiguadores",
                "Resortes",
                "Rotulas",
                "Bujes",
                "Parrillas",
                "Cazoletas",
                "Bieletas",
                "Barras de Torsión"
            ],
            "marcas": [
                "/marcas/PEER.jpg",
                "/marcas/apicer.png",
                "/marcas/ENERBAT.jpg",
                "/marcas/MAHLE.jpg",
                "/marcas/nakata.png",
                "/marcas/thompson.png",]
        },
        "LÍQUIDOS": {
            "productos": [
                "Lubricantes",
                "Líquidos Refrigerantes y Anticongelantes",
                "Aditivos",
                "Antipinchaduras y Compresores",
                "Líquido de Freno"
            ],
            "marcas": [
                "/marcas/PEER.jpg",
                "/marcas/apicer.png",
                "/marcas/ENERBAT.jpg",
                "/marcas/MAHLE.jpg",
                "/marcas/nakata.png",
                "/marcas/thompson.png",]
        },
        "DIRECCIÓN": {
            "productos": [
                "Extremos",
                "Salida de Cremalleras",
                "Cremalleras"
            ],
            "marcas": [
                "/marcas/PEER.jpg",
                "/marcas/apicer.png",
                "/marcas/ENERBAT.jpg",
                "/marcas/MAHLE.jpg",
                "/marcas/nakata.png",
                "/marcas/thompson.png",]
        },
        "FRENO": {
            "productos": [
                "Pastillas",
                "Discos",
                "Campanas",
                "Cilindros de Rueda",
                "Cilindros Maestros/Bombas",
                "Flexibles",
                "Depresores"
            ],
            "marcas": []
        },
        "TRANSMISIÓN": {
            "productos": [
                "Embrague",
                "Juntas Homocinéticas",
                "Semiejes",
                "Crucetas y Tricetas",
                "Columnas de Dirección",
                "Manchones",
                "Fuelles y Topes",
                "Rodamientos"
            ],
            "marcas": []
        },
        "ENCENDIDO": {
            "productos": [
                "Bujías"
            ],
            "marcas": []
        },
        "COMPLEMENTARIOS": {
            "productos": [
                "Contrapesos",
                "Soportes",
                "Resortes de Portón"
            ],
            "marcas": []
        }
    };

    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const handleCloseClick = (e) => {
        e.stopPropagation();
        setExpandedCard(null);
    };

    const getCategoryDetails = (categoryName) => {
        return details[categoryName] || { productos: [] };
    };

    return (
        <>
            <section id="productos" className="bg-base h-auto flex flex-col gap-10 justify-center items-center w-full">
                <h1 className="2xl:text-6xl 2xl:leading-relaxed md:text-5xl text-3xl text-center leading-relaxed md:leading-relaxed mt-16 fade-text text-primary">
                    Nos especializamos en <strong>Tren Delantero</strong>
                </h1>
                <div className="w-10/12 h-[70vh]">
                    <div className="parent h-full pb-16">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className={`div${index + 1} cursor-pointer text-gray-700 ${expandedCard === index ? 'expanded shadow overflow-auto' : 'hover:bg-secondary hover:text-white transition-all hover:drop-shadow-xl hover:-translate-y-3 duration-300'}`}
                                onClick={() => handleCardClick(index)}
                            >
                                {expandedCard === index ?
                                    <>
                                        <div className="h-full w-full flex flex-col items-center relative">
                                            <button
                                                onClick={handleCloseClick}
                                                className="absolute top-4 right-4 bg-gray-400 hover:bg-red-400 transition-colors h-10 w-10 flex justify-center items-center rounded-full"
                                                data-tooltip-id="tooltip-cerrar" data-tooltip-content="Cerrar"
                                            >
                                                <FontAwesomeIcon icon={faTimes} size="lg" color="white" />
                                            </button>
                                            <Tooltip place="bottom" type="dark" effect="solid" id="tooltip-cerrar" />
                                            <h3 className="mt-8 text-lg lg:text-4xl font-extrabold break-all text-center">{category}</h3>
                                            {getCategoryDetails(category)?.productos.length > 0 ?
                                                <>
                                                    <p className="mt-4 text-left w-3/4 font-semibold text-lg">Tipos de productos:</p>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-3/4 mt-4">
                                                        {
                                                            getCategoryDetails(category)?.productos?.map((producto, idx) => (
                                                                <p key={idx} className="p-2  rounded-md text-center flex items-center gap-5">
                                                                    <FontAwesomeIcon icon={faCircle} className="text-secondary" /> {producto}
                                                                </p>
                                                            ))
                                                        }
                                                    </div>

                                                    <p className="pt-6 text-left w-3/4 font-semibold text-lg">Marcas:</p>
                                                    <div className="flex flex-row justify-center items-center gap-16 w-3/4 py-6">
                                                        {getCategoryDetails(category).marcas?.map((img, idx) => (
                                                            <div className="w-12 h-12">
                                                                <img key={idx} src={img} alt={`Image ${idx + 1}`} className="w-full h-auto object-cover" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                                :
                                                <p className="text-center text-lg mt-8">Próximamente añadiremos productos</p>
                                            }
                                        </div>
                                    </>
                                    :
                                    <p className="text-lg lg:text-4xl font-extrabold break-all text-center">{category}</p>
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </section >
            <BrandCarousel />
        </>
    );
}
