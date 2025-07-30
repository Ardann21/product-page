import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";
function App() {

  const [cart,setCart] = useState([])

   const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: product.quantity }];
      }
    });
  };

   const removeFromCart = (productId) => {
  setCart((prev) => prev.filter((item) => item.id !== productId));
};

  return (
    <>
      <Nav cart={cart} removeFromCart={removeFromCart}/>
      <Main addToCart={addToCart} />
    </>
  );
}

export default App;
