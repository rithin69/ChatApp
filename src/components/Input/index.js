import React from 'react';

const Input = ({
    label = '',
    name='',
    type = 'text',
    className = "",
    isRequired = false,
    placeholder = ''
}) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                id={name}
                name={name} 
                className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 ${className}`}
                placeholder={placeholder}
                required={isRequired} // Correct attribute for required
            />
        </div>
    );
};

export default Input;
