import "./App.css";
import ProductDetails from "./Pages/ProductDetails";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import { Route, Switch } from "react-router-dom";
import ProductContext from "./context/ProductContext";
import CartContext from "./context/CartContext";
import { useEffect, useState } from "react";
import { getProducts } from "./utils";
import NavBar from "./components/NavBar";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (product, quantity) => {
    console.log(quantity);
    let index = cart.findIndex((item) => item.product.id === product.id);

    if (index >= 0) {
      const cartCopy = [...cart];
      console.log(cartCopy);
      cartCopy[index].quantity += parseInt(quantity, 10);
      setCart(cartCopy);
    } else {
      setCart([
        ...cart,
        {
          product,
          quantity: quantity,
        },
      ]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.product.id !== id);
    setCart(newCart);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, setProducts }}>
        <CartContext.Provider
          value={{ cart, setCart, addToCart, removeFromCart }}
        >
          <NavBar />
          <Switch>
            <Route path="/" exact component={Product} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
