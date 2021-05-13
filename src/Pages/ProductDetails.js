import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import CartContext from "../context/CartContext";
import ProductContext from "../context/ProductContext";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { addToCart, cart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  // const index = parseInt(id);

  const product = products.filter((item) => item.id !== id)
    ? products[id - 1]
    : null;

  const relatedProducts = products.filter(
    (products) =>
      products.category === product.category && products.id !== product.id
  );

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   console.log(product);
  //   console.log(cart);
  //   setCart([{ product: product, quantity: cart.quantity }]);
  // };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  // const product =
  //   Number.isInteger(index) && index >= 0 && index < products.length
  //     ? products[id]
  //     : null;

  return (
    <div>
      {product ? (
        <Container
          style={{
            marginTop: 20,
            border: "1px solid black",
            borderRadius: "15px",
            backgroundColor: "lightGray",
          }}
        >
          <Row style={{ marginTop: 20, marginBottom: 20 }}>
            <Col>
              <img
                src={product.image}
                alt={product.title}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: 250,
                }}
              />
            </Col>
            <Col>
              <h3>{product.title}</h3>
              <dl>
                <dt>description</dt>
                <dd>{product.description}</dd>
                <dt>category</dt>
                <dd>{product.category}</dd>
                <dt>price</dt>
                <dd>${product.price}</dd>
              </dl>
              <form>
                <label htmlFor="">Qty:</label>
                <select
                  value={cart.quantity}
                  name="quantity"
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </form>
              <button
                style={{
                  margin: 10,
                  borderRadius: "15px",
                  backgroundColor: "lightgray",
                }}
                onClick={() => addToCart(product, quantity)}
              >
                Add to cart
              </button>
            </Col>
          </Row>
          <hr />
          <h3>Related Products</h3>
          {relatedProducts.map((products) => (
            <>
              <Row
                style={{ marginTop: 15, marginBottom: 20 }}
                key={products.id}
              >
                <Col sm={3}>
                  <img
                    src={products.image}
                    alt={products.title}
                    style={{
                      width: 100,
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </Col>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <h6>{products.title}</h6>
                  <p>${products.price}</p>
                </Col>
              </Row>
              <hr />
            </>
          ))}
        </Container>
      ) : (
        <h3>An error has occurred</h3>
      )}
    </div>
  );
};

export default ProductDetails;
