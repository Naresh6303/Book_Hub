import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
import { useState } from "react";


function App() {

  const [cart , setCart] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart cart={cart}  setCart={setCart}/>}/>
          <Route path='/:id' element={<Products cart={cart}  setCart={setCart}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
