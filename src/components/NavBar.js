import React, { useContext, useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import CartContext from "../context/CartContext";
import ProductContext from "../context/ProductContext";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  const { products, setProducts } = useContext(ProductContext);
  const { cart } = useContext(CartContext);

  const history = useHistory();

  let sum = 0;

  cart.forEach((cart) => {
    sum += cart.quantity;
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchedProduct = products.filter(
      (items) =>
        items.category.includes(search) ||
        items.title.includes(search) ||
        items.description.includes(search)
    );
    console.log("Clicked", searchedProduct);
    // document.searchForm.reset();
    setProducts([...searchedProduct]);
  };

  console.log(products);

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/")}
      >
        Drip
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => history.push("/checkout")}>Checkout</Nav.Link>
        <Nav.Link onClick={() => history.push("/cart")}>
          Cart {sum > 0 ? <span style={{ color: "white" }}>{sum}</span> : ""}
        </Nav.Link>
      </Nav>
      {/* <Form inline name="searchForm" onSubmit={handleSearchSubmit}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={handleSearchChange}
        />
        <Button variant="outline-light">Search</Button>
      </Form> */}
    </Navbar>
  );
};

export default NavBar;
