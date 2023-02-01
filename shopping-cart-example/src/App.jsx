import './App.css';
import { useState } from 'react';

import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {
  const books = [
    {
      "id": "book-1",
      "title": "A Sign of Four",
      "author": "Sir Arthur Conan Doyle",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, unde distinctio? Officia sed sit tempora. Vitae tenetur deleniti maiores beatae, inventore commodi! Est nihil adipisci iusto minus, magnam blanditiis temporibus."
    },
    {
      "id": "book-2",
      "title": "A Study in Scarlet",
      "author": "Sir Arthur Conan Doyle",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, unde distinctio? Officia sed sit tempora. Vitae tenetur deleniti maiores beatae, inventore commodi! Est nihil adipisci iusto minus, magnam blanditiis temporibus."
    },
    {
      "id": "book-3",
      "title": "Baskervilles Hound",
      "author": "Sir Arthur Conan Doyle",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, unde distinctio? Officia sed sit tempora. Vitae tenetur deleniti maiores beatae, inventore commodi! Est nihil adipisci iusto minus, magnam blanditiis temporibus."
    },
    {
      "id": "book-4",
      "title": "The Adventures of Sherlock Holmes",
      "author": "Sir Arthur Conan Doyle",
      "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, unde distinctio? Officia sed sit tempora. Vitae tenetur deleniti maiores beatae, inventore commodi! Est nihil adipisci iusto minus, magnam blanditiis temporibus."
    }
  ];
  const [cart, setCart] = useState([]);

  function updateCart(book) {
    setCart((currentCart) => {
      return [...currentCart, book];
    })
  }

  const productsComponents = books.map((book) => {
    return <Product book={ book } addToCart={ updateCart } key={ book.id } />
  });

  return (
    <div className="App">
      <Header numberOfProducts={ cart.length } />
      <main className='products'>
        { productsComponents }
      </main>
    </div>
  )
}

export default App
