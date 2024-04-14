import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [book, setLibro] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = 'AIzaSyDYbYaaKtwY8LIblmOQvF-W0Plb4geCIkg';

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
        return <div>Cargando...</div>;
    }

    return (
        <div>
            {book ? (
                <div>
                    <h1>{book.volumeInfo.title}</h1>
                    <p>Autor(es): {book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Desconocido'}</p>
                    <p>Descripción: {book.volumeInfo.description ? cleanHTML(book.volumeInfo.description) : 'No disponible'}</p>
                    <p>Precio: {book.saleInfo && book.saleInfo.listPrice ? `${book.saleInfo.listPrice.amount} ${book.saleInfo.listPrice.currencyCode}` : 'No disponible'}</p>
                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Portada del libro" />
                </div>
            ) : (
                <div>Error al cargar los datos del libro. Inténtalo de nuevo más tarde.</div>
            )}
        </div>
    );
};

export default ItemDetailContainer;

