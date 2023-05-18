import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ProductsList from './components/ProductsList/ProductsList';

import Container from 'react-bootstrap/Container';

const App = () => {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductsList />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Provider>
      </BrowserRouter>
  )
}

export default App
