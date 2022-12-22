import { Routes, Route } from 'react-router-dom';

import MainLayout from 'layout/MainLayout';
import Home from 'pages/Home';
import PizzaInfo from 'components/PizzaInfo/PizzaInfo';
import Cart from 'pages/Cart';
import NotFound from 'pages/NotFound';
import './scss/app.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />}>
          <Route path="pizza/:id" element={<PizzaInfo />} />
        </Route>

        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
