import React from "react";
import Timeline from "../Timeline";

export default function About() {
    const data = [
        {
            "year": 1976,
            "text": "Nace Distrisuper como emprendimiento familiar formado por: xxxxxxxx con el apoyo de Fric Rot para comercializar su línea de amortiguadores Supershock."
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
        <section id="nosotros">
            <div className="bg-base h-[50vh] flex flex-col gap-10 justify-center items-center">
                <h1 className="text-center text-6xl font-bold">Sobre nosotros</h1>
            </div>
            <div>
                <h3 className="text-4xl font-semibold text-center py-12">Nuestra historia</h3>
                <div className="relative h-auto mb-8 w-full">
                    <Timeline data={data} />
                </div>
                <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 px-6">
                    <div className="max-w-sm mx-auto bg-white border rounded-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h2 className="text-gray-700 font-bold text-2xl mb-2 text-center">Nuestra visión</h2>
                            <p className="text-gray-600 text-center">
                                Ser la empresa autopartista y agroindustrial más reconocida del país por innovación y servicios.
                                Ser los más elegidos por nuestros clientes, proveedores y colaboradores.
                            </p>
                        </div>
                        <div className="h-2 bg-secondary"></div>
                    </div>
                    <div className="max-w-sm mx-auto bg-white border rounded-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h2 className="text-gray-700 font-bold text-2xl mb-2 text-center">Nuestra visión</h2>
                            <p className="text-gray-600 text-center">
                                Ser la empresa autopartista y agroindustrial más reconocida del país por innovación y servicios.
                                Ser los más elegidos por nuestros clientes, proveedores y colaboradores.
                            </p>
                        </div>
                        <div className="h-2 bg-secondary"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}