import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import BrandCarousel from "../BrandCarousel"
import "./styles.css";

export default function Product() {
    const categories = [
        "Suspensión",
        "Direc-ción",
        "Fre-no",
        "Lí-qui-dos",
        "Encen-dido",
        "Transmisión",
        "Agroin-dustria",
        "Comple-menta-rios"
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
                "/logosblancos/skf.png",
                "/logosblancos/fric rot.png",
                "/logosblancos/mon.png",
                "/logosblancos/mon matic.png",
                "/logosblancos/spicer.png",
                "/logosblancos/thomp.png",
                "/logosblancos/nakata.png",
                "/logosblancos/mahle.png",
                "/logosblancos/enerbat.png",
                "/logosblancos/peer.png",
                "/logosblancos/ag.png",

            ],

            "fondo": "/fondo-suspension.svg"
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
                "/logosblancos/PEER.png",
                "/logosblancos/apicer.png",
                "/logosblancos/ENERBAT.png",
                "/logosblancos/MAHLE.png",
                "/logosblancos/nakata.png",
                "/logosblancos/thompson.png",]
        },
        "DIRECCIÓN": {
            "productos": [
                "Extremos",
                "Salida de Cremalleras",
                "Cremalleras"
            ],
            "marcas": [
                "/logosblancos/PEER.png",
                "/logosblancos/apicer.png",
                "/logosblancos/ENERBAT.png",
                "/logosblancos/MAHLE.png",
                "/logosblancos/nakata.png",
                "/logosblancos/thompson.png",]
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
        const normalizedCategoryName = categoryName.replace(/-/g, '').toUpperCase();
        return details[normalizedCategoryName] || { productos: [] };
    };

    return (
        <>
            <section id="productos" className="bg-base h-auto flex flex-col gap-10 justify-center items-center w-full">
                <h1 className="2xl:text-6xl 2xl:leading-relaxed md:text-5xl text-3xl text-center leading-relaxed md:leading-relaxed mt-16 fade-text text-primary">
                    Nos especializamos en <strong>Tren Delantero</strong>
                </h1>
                <div className="w-11/12 h-[75vh]">
                    <div className="parent h-full pb-16">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                style={{ backgroundImage: expandedCard === index ? `url(${getCategoryDetails(category)?.fondo})` : '' }}
                                className={`div${index + 1} cursor-pointer text-white ${expandedCard === index ? 'expanded shadow' : 'hover:bg-secondary hover:text-white transition-all hover:drop-shadow-xl hover:-translate-y-3 duration-300'} ${expandedCard !== index && expandedCard !== null ? 'opacity-0' : ''}`}
                                onClick={() => handleCardClick(index)}
                            >
                                {expandedCard === index ?
                                    <>
                                        <div className="h-full w-full flex flex-col 2xl:py-10 relative px-36 justify-center">

                                            <button
                                                onClick={handleCloseClick}
                                                className="absolute top-4 right-4 border text-white/60 hover:text-white border-white/60 hover:bg-red-400 hover:border-red-400 transition-colors 2xl:h-10 2xl:w-10 h-8 w-8 flex justify-center items-center rounded-full"
                                                data-tooltip-id="tooltip-cerrar" data-tooltip-content="Cerrar"
                                            >
                                                <FontAwesomeIcon icon={faTimes} />
                                            </button>
                                            <Tooltip place="bottom" type="dark" effect="solid" id="tooltip-cerrar" />
                                            <Tooltip place="bottom" type="dark" effect="solid" id="tooltip-anterior" />
                                            <Tooltip place="bottom" type="dark" effect="solid" id="tooltip-siguiente" />


                                            <button
                                                onClick={handleCloseClick}
                                                className="absolute top-1/2 -translate-y-1/2 left-4 border text-white/60 hover:text-white border-white/60 hover:border-white transition-colors 2xl:h-16 2xl:w-16 h-12 w-12 flex justify-center items-center rounded-full"
                                                data-tooltip-id="tooltip-anterior" data-tooltip-content="Anterior"
                                            >
                                                <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                                            </button>

                                            <button
                                                onClick={handleCloseClick}
                                                className="absolute top-1/2 -translate-y-1/2 right-4 border text-white/60 hover:text-white border-white/60 hover:border-white transition-colors 2xl:h-16 2xl:w-16 h-12 w-12 flex justify-center items-center rounded-full"
                                                data-tooltip-id="tooltip-siguiente" data-tooltip-content="Siguiente"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} size="lg" />
                                            </button>

                                            <h3 className="mt-8 text-lg lg:text-6xl 2xl:text-7xl font-extrabold self-start" dangerouslySetInnerHTML={{ __html: category.replace(/-/g, '') }} />
                                            {getCategoryDetails(category)?.productos.length > 0 ?
                                                <div className="flex flex-col w-full mt-2">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 w-3/4 mt-4">
                                                        {
                                                            getCategoryDetails(category)?.productos?.map((producto, idx) => (
                                                                <p key={idx} className="p-1 rounded-md text-center flex items-center gap-5 text-lg 2xl:text-2xl">
                                                                    <FontAwesomeIcon icon={faCircle} className="text-secondary" size="sm" /> {producto}
                                                                </p>
                                                            ))
                                                        }
                                                    </div>

                                                    <div className="flex flex-row justify-between mt-8">
                                                        {getCategoryDetails(category).marcas?.map((img, idx) => (
                                                            <div className="w-14 h-14 2xl:w-20 2xl:h-20" key={idx}>
                                                                <img src={img} alt={`Image ${idx + 1}`} className="w-full h-auto object-cover" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                :
                                                <p className="text-center text-lg mt-8">Próximamente añadiremos productos</p>
                                            }
                                        </div>
                                    </>
                                    :
                                    <p className="text-lg lg:text-5xl font-extrabold text-center" dangerouslySetInnerHTML={{ __html: category.replace(/-/g, '<wbr />').toUpperCase() }} />
                                }
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <BrandCarousel />
        </>
    );
}