import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layout/MainLayout';
import Home from 'pages/Home';
import PizzaInfoModal from 'components/PizzaInfoModal/PizzaInfoModal';
import Cart from 'pages/Cart';
import NotFound from 'pages/NotFound';
import './scss/app.scss';
import { ClearCartModal } from 'components/ClearCartModal/ClearCartModal';
import { ClearCartItemModal } from 'components/ClearCartItemModal/ClearCartItemModal';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}>
          <Route path="pizza/:id" element={<PizzaInfoModal />} />
        </Route>

        <Route path="cart" element={<Cart />}>
          <Route path="clear" element={<ClearCartModal />} />
          <Route path="clear/:param" element={<ClearCartItemModal />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
