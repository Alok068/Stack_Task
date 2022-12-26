import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import Header from "./component/Header";
import Home from "./component/Home";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
