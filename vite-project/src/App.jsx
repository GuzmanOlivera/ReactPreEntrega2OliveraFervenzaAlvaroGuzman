import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<div>404: Not Found</div>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
