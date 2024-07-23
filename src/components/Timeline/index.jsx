import React, { useState } from 'react';
import './styles.css'
const Timeline = () => {
    const [selectedYear, setSelectedYear] = useState(1976);

    const timelineData = [
        { year: 1976, text: 'Nace Distrisuper como emprendimiento familiar formado por: xxxxxxxx con el apoyo de Fric Rot para comercializar su línea de amortiguadores Supershock.' },
        { year: 1998, text: 'Nace Intercar Autopartes; como alianza entre distribuidores (entre ellos Distrisuper) para optimizar los servicios en base a la experiencia y los conocimientos adquiridos.' },
        { year: 2011, text: 'Inauguramos Sucursal MDP gracias al apoyo de nuestros clientes y proveedores.' },
        { year: 2017, text: 'Inauguramos Sucursal en Zona Norte GBA, con el apoyo de Fric Rot.' },
        { year: 2021, text: 'Sumamos SKF como proveedor para incrementar nuestra cartera de productos' },
        { year: 2024, text: 'Incorporamos Productos de AGRO e Industria.' },
    ];

    const handleSelectYear = (year) => {
        setSelectedYear(year);
    };

    const selectedData = timelineData.find(data => data.year === selectedYear);

    return (
        <div className="p-8 w-full mx-auto bg-white border rounded-lg min-h-64">
            <div className="relative mb-4 flex flex-col md:flex-row">
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="text-gray-600 mb-4 md:mb-0">
                        <p>{selectedData.text}</p>
                    </div>
                </div>
                <div className="md:w-2/3 flex flex-col items-center md:items-start md:pl-8">
                    <div className="relative">
                        {timelineData.map((data) => (
                            <div key={data.year} className="flex flex-row items-center mb-8">
                                <div className="relative z-10 w-8 h-8 flex justify-center items-center rounded-full border-2 border-gray-300 bg-white">
                                    {data.year === selectedYear && <div className="w-6 h-6 rounded-full bg-base"></div>}
                                </div>
                                <div className="ml-4 text-lg font-semibold" onClick={() => handleSelectYear(data.year)}>
                                    <span className={data.year === selectedYear ? 'text-secondary text-2xl font-bold' : 'text-gray-300'}>{data.year}</span>
                                </div>
                            </div>
                        ))}
                        <div className="absolute top-0 left-4 h-full border-l-2 border-gray-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
