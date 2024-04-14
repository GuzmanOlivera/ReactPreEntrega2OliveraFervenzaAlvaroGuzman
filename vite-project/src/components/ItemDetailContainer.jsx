import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [libro, setLibro] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(response => response.json())
            .then(data => {
                setLibro(data);
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            {libro && (
                <div>
                    <h1>{libro.volumeInfo.title}</h1>
                    <p>Autor(es): {libro.volumeInfo.authors ? libro.volumeInfo.authors.join(', ') : 'Desconocido'}</p>
                    <p>Descripción: {libro.volumeInfo.description || 'No disponible'}</p>
                    <p>Precio: {libro.saleInfo.listPrice ? `${libro.saleInfo.listPrice.amount} ${libro.saleInfo.listPrice.currencyCode}` : 'No disponible'}</p>
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;
