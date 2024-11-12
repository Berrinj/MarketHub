// import { useState } from 'react'
import "./styles.scss";
import * as C from "./components";
import { Routes, Route } from "react-router-dom";
function RouteNotFound() {
  return <div>Page not found</div>
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<C.Layout />}>
        <Route index element={<C.Home />} />
        <Route path="about" element={<C.About />} />
        <Route path="contact" element={<C.Contact />} />
        <Route path="product" element={<C.Product />} />
        <Route path="cart" element={<C.Cart />} />
        <Route path="checkout" element={<C.Checkout />} />
        <Route path="checkout-success" element={<C.CheckoutSuccess />} />
        <Route path="*" element={<RouteNotFound />} />
        </Route>
    </Routes>
    </>
  );
}

export default App;
