import { Typography } from 'antd';
import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"
import { useParams } from "react-router-dom"

const { Title } = Typography;

function ItemListContainer() {
  const [books, setBooks] = useState([])
  const params = useParams()

  useEffect(() => {
    const apiKey = 'AIzaSyDYbYaaKtwY8LIblmOQvF-W0Plb4geCIkg'; 
    const searchTerm = params.categoria || 'computer science'; 

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setBooks(data.items || []); // Handle potential empty response
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });

  }, [params.categoria]);

  return (
    <>
      <Title>Libros {params.categoria ? `- ${params.categoria}` : ''}</Title>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <ItemCard key={book.id} book={book} />
        ))}
      </div>
    </>
  )
}

export default ItemListContainer;
