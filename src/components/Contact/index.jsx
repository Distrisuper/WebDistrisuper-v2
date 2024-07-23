import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import FormInput from "../Inputs/FormInput";

export default function Contact() {
    return (
        <>
            <div className="bg-base h-[50vh] flex flex-col gap-10 justify-center items-center">
                <h1 className="text-center text-6xl font-bold">Contactános</h1>
                <p>Inicio - Contacto</p>
            </div>
            <div className="flex flex-row justify-center gap-20">
                <div className="flex flex-row items-center gap-4">
                    <div className="bg-secondary h-16 w-16 rounded-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faEnvelope} size="xl" color="white" />
                    </div>
                    <p className="text-4xl font-semibold text-center py-12">info.distrisuper@gmail.com</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <div className="bg-secondary h-16 w-16 rounded-full flex justify-center items-center">
                        <FontAwesomeIcon icon={faPhone} size="xl" color="white" />
                    </div>
                    <p className="text-4xl font-semibold text-center py-12">0810-666-4500</p>
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <form className="w-full md:w-1/2 lg:w-1/3 space-y-4">
                    <FormInput type="text" placeholder="Nombre y apellido" />
                    <FormInput type="email" placeholder="Email" />
                    <FormInput type="text" placeholder="Teléfono (opcional)" />
                    <div>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded mt-1 outline-accent"
                            placeholder="Mensaje"
                        ></textarea>
                    </div>
                    <div className="w-full md:w-1/2">

                    </div>
                </form>
            </div>
            <div className="flex flex-row gap-20 justify-between p-24">
                <h3 className="text-5xl font-bold text-gray-700 ">Nuestras sucursales</h3>

            </div>

        </>
    );
}