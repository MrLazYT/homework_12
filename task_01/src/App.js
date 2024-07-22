import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/products/ProductList';
import ProductContainer from './components/products/ProductContainer';

function App() {
  return (
    <div className="App">
        <header className='app-header'>
          <h1>Craft Products</h1>
        </header>

        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='*' element={<ProductList/>}/>
          <Route path='/:id' element={<ProductContainer/>}/>
        </Routes>

    </div>
  );
}

export default App;