import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategorias }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setCategorias((cats) => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { handleInputChange }
                placeholder = "Indique categoría a agregar"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}
