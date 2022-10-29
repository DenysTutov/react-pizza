import { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "components";
import Home from "pages/Home";
import Cart from "pages/Cart";
import NotFound from "pages/NotFound";
import "./scss/app.scss";

export const SearchContext = createContext();

export const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
};
