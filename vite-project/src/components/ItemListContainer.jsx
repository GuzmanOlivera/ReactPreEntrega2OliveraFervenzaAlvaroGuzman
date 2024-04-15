import { Typography } from 'antd';
import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"
import { useParams } from "react-router-dom"
import config from '../config';


const { Title } = Typography;

function ItemListContainer() {
  const [books, setBooks] = useState([])
  const params = useParams()
  
  useEffect(() => {
  
    const apiKey = config.apiKey;

    const searchTerm = params.category || 'programming|database|computers|data';

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setBooks(data.items || []);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });

  }, [params.category]);

  return (
    <>
      <Title>Libros de informática {params.category ? `- Filtro: "${params.category}"` : ''}</Title>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {books.map((book) => (
          <ItemCard key={book.id} book={book} />
        ))}
      </div>
    </>
  )
}

export default ItemListContainer;