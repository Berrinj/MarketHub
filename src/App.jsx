// import { useState } from 'react'
import "./styles.scss";
import * as C from "./components";
import { Routes, Route } from "react-router-dom";

/**
 * @returns the RouteNotFound component with the text Page not found
 */

function RouteNotFound() {
  return <div>Page not found</div>
}

/**
 * @returns the App component with the Routes and Route components
 */

function App() {
  return (
      <Routes>
        <Route path="/" element={<C.Layout />}>
        <Route index element={<C.Home />} />
        <Route path="contact" element={<C.Contact />} />
        <Route path="product/:id" element={<C.DisplayProduct />} />
        <Route path="cart" element={<C.CartPage />} />
        <Route path="checkout" element={<C.Checkout />} />
        <Route path="checkout-success" element={<C.CheckoutSuccess />} />
        <Route path="*" element={<RouteNotFound />} />
        </Route>
    </Routes>
  );
}

export default App;
