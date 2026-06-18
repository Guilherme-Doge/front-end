import React from 'react';

export default function Filtrar({ genero, aoClicar }) {
    return (
        <button 
            onClick={() => aoClicar(`gender=${genero}`)}
            style={{ padding: '8px 15px', marginRight: '10px', cursor: 'pointer' }}
        >
            Apenas {genero}
        </button>
    );
}