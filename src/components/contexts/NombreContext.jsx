import React, { useState } from 'react';

export const NombreContext = React.createContext();

export const NombreProvider = ({ children }) => {

    const [nombre, setNombre] = useState(0);

    return (
        <NombreContext.Provider value={{ nombre, setNombre }}>
            {children}
        </NombreContext.Provider>
    )
}
