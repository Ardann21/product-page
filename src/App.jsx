import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import { useState } from "react";
function App() {
  const [quant,setQuant] = useState(0)
  const [cartItem,setCartItem] = useState([])
  return (
    <>
      <Nav quant={quant} setQuant={setQuant} cartItem={cartItem} setCartItem={setCartItem}/>
      <Main quant={quant} setQuant={setQuant} cartItem={cartItem} setCartItem={setCartItem}/>
    </>
  );
}

export default App;
