import React from "react";

export default function About() {
    return (
        <section id="nosotros">
            <div className="bg-base h-[50vh] flex flex-col gap-10 justify-center items-center">
                <h1 className="text-center text-6xl font-bold">Sobre nosotros</h1>

            </div>
            <div>
                <h3 className="text-4xl font-semibold text-center py-12">Nuestra historia</h3>
                <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
                    <div className="max-w-sm mx-auto bg-white border rounded-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h2 className="text-gray-700 font-bold text-2xl mb-2 text-center">Nuestra visión</h2>
                            <p className="text-gray-600 text-center">
                                Ser la empresa autopartista y agroindustrial más reconocida del país por innovación y servicios.
                                Ser los más elegidos por nuestros clientes, proveedores y colaboradores.
                            </p>
                        </div>
                        <div className="h-2 bg-blue-500"></div>
                    </div>
                    <div className="max-w-sm mx-auto bg-white border rounded-lg overflow-hidden">
                        <div className="px-6 py-8">
                            <h2 className="text-gray-700 font-bold text-2xl mb-2 text-center">Nuestra visión</h2>
                            <p className="text-gray-600 text-center">
                                Ser la empresa autopartista y agroindustrial más reconocida del país por innovación y servicios.
                                Ser los más elegidos por nuestros clientes, proveedores y colaboradores.
                            </p>
                        </div>
                        <div className="h-2 bg-blue-500"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}