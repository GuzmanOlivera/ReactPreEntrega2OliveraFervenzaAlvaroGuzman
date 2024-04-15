import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import config from '../config';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [book, setLibro] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = config.apiKey;

    useEffect(() => {
        if (!id) return;

        fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${apiKey}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los datos');
                }
                return response.json();
            })
            .then(data => {
                setLibro(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [id, apiKey]);

    // Función para limpiar el HTML y extraer solo el texto
    const cleanHTML = html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    if (loading) {
        return <div className="py-4 text-center">Cargando...</div>;
    }

    return (
        <div className="py-4">
            {book ? (
                <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <img className="block mx-auto" src={book.volumeInfo.imageLinks?.thumbnail} alt="Portada del libro" />
                    <div className="p-4">
                        <h1 className="text-2xl font-bold mb-2">{book.volumeInfo.title}</h1>
                        <p className="text-gray-700 mb-2">Autor(es): {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Desconocido'}</p>
                        <p className="text-gray-700 mb-2">Descripción: {book.volumeInfo.description ? cleanHTML(book.volumeInfo.description) : 'No disponible'}</p>
                        <p className="text-gray-700 mb-2">Precio: {book.saleInfo && book.saleInfo.listPrice ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : 'No disponible'}</p>
                    </div>
                </div>
            ) : (
                <div className="text-center text-red-500">Error al cargar los datos del libro. Inténtalo de nuevo más tarde.</div>
            )}
        </div>
    );
};

export default ItemDetailContainer;
