import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main">
        <ItemListContainer greeting="¡Bienvenido a CodeBook Emporium!" />
      </main>
      <Routes>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/category/:id" component={ItemListContainer} />
        <Route exact path="/item/:id" component={ItemDetailContainer} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

