import React from 'react';

const FormInput = ({ type, placeholder }) => {
    return (
        <div>
            <input
                type={type}
                className="w-full p-2 border border-gray-300 rounded mt-1  outline-secondary text-gray-700"
                placeholder={placeholder}
            />
        </div>
    );
};

export default FormInput;