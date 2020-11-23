import React from 'react';

import './search-box.styles.css'

export const SearchBox = ( {handleType, placeholder, handleChange } ) => (
    <input 
        className='search'
        type={handleType}
        placeholder={placeholder}
        onChange={handleChange} 
    />

)