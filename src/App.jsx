import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from 'components';
import Home from 'pages/Home';
import Cart from 'pages/Cart';
import NotFound from 'pages/NotFound';
import './scss/app.scss';

export const SearchContext = createContext();

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};