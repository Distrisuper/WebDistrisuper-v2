import React from "react";
import Timeline from "../Timeline";
import vision from "/vision.png";
import mision from "/mision.png";
import fondo from "/fondos/fondo-about.webp"

export default function About() {
    const data = [
        {
            "year": 1976,
            "text": "Nace Distrisuper como emprendimiento familiar formado por José O. Mónaco, José Montes, Carlos J. Pérez y Gerardo N. Montes con el apoyo de Fric Rot para comercializar su línea de amortiguadores Supershock."
        },
        {
            "year": 1998,
            "text": "Nace Intercar Autopartes; como alianza entre distribuidores (entre ellos Distrisuper) para optimizar los servicios en base a la experiencia y los conocimientos adquiridos."
        },
        {
            "year": 2011,
            "text": "Inauguramos Sucursal MDP gracias al apoyo de nuestros clientes y proveedores."
        },
        {
            "year": 2017,
            "text": "Inauguramos Sucursal en Zona Norte GBA, con el apoyo de Fric Rot."
        },
        {
            "year": 2021,
            "text": "Sumamos SKF como proveedor para incrementar nuestra cartera de productos."
        },
        {
            "year": 2024,
            "text": "Incorporamos Productos de AGRO e Industria."
        }
    ]


    return (
        <section id="nosotros" >

            <div>
                <h3 className="text-5xl font-semibold text-center md:pt-24 md:pb-16  pt-20 pb-10 text-gray-700">Nuestra historia</h3>
                <div className="relative h-auto mb-16 w-full">
                    <Timeline data={data} />
                </div>
                <div style={{ backgroundImage: `url(${fondo})` }} className="flex flex-col gap-10 lg:flex-row lg:justify-center w-full lg:gap-24 px-6 py-24 bg-cover">
                    <div className="max-w-sm bg-white/80 border rounded-lg overflow-hidden border-b-4 border-b-secondary flex flex-col px-6 items-center py-10 gap-4">
                        <div className="w-24 h-24 flex justify-center items-center">
                            <img src={vision} className="w-full h-auto object-cover" />
                        </div>
                        <div>
                            <h2 className="text-gray-700 font-bold text-2xl mb-2 text-center">Nuestra Visión</h2>
                            <p className="text-gray-600 text-center">
                                Ser la empresa autopartista y agroindustrial más reconocida del país por innovación y servicios.
                                Ser los más elegidos por nuestros clientes, proveedores y colaboradores.
                            </p>
                        </div>

                    </div>
                    <div className="max-w-sm  bg-white/80 border rounded-lg overflow-hidden border-b-4 border-b-secondary flex flex-col px-6 items-center py-10 gap-4">
                        <div className="w-24 h-24 flex justify-center items-center">
                            <img src={mision} className="w-full h-auto object-cover" />
                        </div>
                        <div>
                            <h2 className="text-gray-700 font-bold text-2xl mb-2 text-center">Nuestra Misión</h2>
                            <p className="text-gray-600 text-center">
                                Somos una distribuidora mayorista de auto-partes dedicada a satisfacer las necesidades de nuestros clientes basándonos fuertemente en el servicio, calidad y disponibilidad de nuestros productos y en la continua innovación.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}