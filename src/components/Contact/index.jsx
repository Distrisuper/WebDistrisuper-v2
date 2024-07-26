import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import FormInput from "../Inputs/FormInput";

const sucursales = [
    { name: 'General Pico', url: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3241.480591243464!2d-63.760555599999996!3d-35.66516670000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzU0LjYiUyA2M8KwNDUnMzguMCJX!5e0!3m2!1ses!2sar!4v1716828693068!5m2!1ses!2sar' },
    { name: 'Mar del Plata', url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.957702961075!2d-57.577296999999994!3d-37.978116400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d915200904f5%3A0x9b514aadda08fa90!2sCHS%2C%2011%20de%20Septiembre%205957%2C%20B7604%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1716828727814!5m2!1ses!2sar' },
    { name: 'El talar (GBA)', url: 'https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3288.9371309345483!2d-58.6646828!3d-34.4791191!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses!2sar!4v1716828741260!5m2!1ses!2sarS' },

];

export default function Contact() {
    const [selectedSucursal, setSelectedSucursal] = useState(sucursales[0].url);

    const handleSucursalChange = (event) => {
        const selected = sucursales.find(sucursal => sucursal.name === event.target.value);
        setSelectedSucursal(selected.url);
    };


    return (
        <section id="contacto">
            <div className="bg-base h-[50vh] flex flex-col gap-10 justify-center items-center mt-16">
                <h1 className="text-center text-4xl lg:text-6xl font-bold">Contactános</h1>

            </div>
            <div className="flex flex-row lg:justify-center gap-0 lg:gap-20 w-full flex-wrap p-4 lg:p-8 text-gray-700">
                <div className="flex flex-row items-center gap-4 mt-10 lg:mt-0">
                    <div className="bg-secondary h-12 w-12 rounded-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faEnvelope} size="lg" color="white" />
                    </div>
                    <p className="text-lg lg:text-2xl font-semibold text-center lg:py-12">info.distrisuper@gmail.com</p>
                </div>
                <div className="flex flex-row items-center gap-4 mt-4 lg:mb-0 lg:mt-0">
                    <div className="bg-secondary h-12 w-12 rounded-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faPhone} size="lg" color="white" />
                    </div>
                    <p className="text-lg lg:text-2xl font-semibold text-center lg:py-12">0810-666-4500</p>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:gap-20 gap-5 justify-center items-center p-8 lg:p-0">
                <form className="w-full md:w-1/2 lg:w-1/3 space-y-4">
                    <FormInput type="text" placeholder="Nombre y apellido" />
                    <FormInput type="email" placeholder="Email" />
                    <FormInput type="text" placeholder="Teléfono (opcional)" />
                    <div>
                        <label className='font-semibold'>Mensaje</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded mt-1 outline-secondary"
                        ></textarea>
                    </div>
                    <div className="w-full md:w-1/2">

                    </div>
                </form>
                <div className="h-64 w-64 lg:h-96 lg:w-96 bg-gray-300 rounded-lg flex items-center justify-center">
                    Imagen
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center gap-20 w-full mb-8 mt-24">
                    <h1 className="text-4xl font-bold text-gray-700">Encontranos en: </h1>
                    <select
                        className="mb-4 p-2  border-2 border-secondary text-secondary rounded outline-secondary"
                        onChange={handleSucursalChange}
                    >
                        {sucursales.map((sucursal) => (
                            <option key={sucursal.name} value={sucursal.name}>
                                {sucursal.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-full h-96">
                    <iframe
                        src={selectedSucursal}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}