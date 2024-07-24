import React from 'react';

const FormInput = ({ type, placeholder }) => {
    return (
        <div>
            <label className='font-semibold'>{placeholder}</label>
            <input
                type={type}
                className="w-full p-2 border border-gray-300 rounded mt-1  outline-secondary text-gray-700"

            />
        </div>
    );
};

export default FormInput;