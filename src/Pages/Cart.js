import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  let sum = 0;
  let itemSum = 0;

  cart.forEach((cart) => {
    sum += cart.product.price * cart.quantity;
  });

  cart.forEach((cart) => {
    itemSum += cart.quantity;
  });

  return (
    <Container
      style={{
        backgroundColor: "lightgray",
        borderRadius: "15px",
        border: "1px solid black",
        marginTop: 20,
      }}
    >
      <Row style={{ marginTop: 20, marginBottom: 20 }}>
        <h1>Shopping Cart</h1>
        {cart.length > 0 ? (
          <p>
            Total ({itemSum} items): ${sum}
          </p>
        ) : (
          <div></div>
        )}
      </Row>
      {cart.length > 0
        ? cart.map((products) => (
            <Row
              style={{
                marginTop: 20,
                marginBottom: 20,
                paddingBottom: 10,
                borderBottom: "1px solid gray",
              }}
              key={products.product.id}
            >
              <Col sm={3}>
                <img
                  src={products.product.image}
                  alt={products.product.title}
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
                <h5>{products.product.title}</h5>
                <p>Qty: {products.quantity}</p>
                <p>Price: ${products.product.price}</p>
                <button
                  style={{
                    width: 100,
                    margin: 10,
                    borderRadius: "15px",
                    backgroundColor: "lightgray",
                  }}
                  onClick={() => removeFromCart(products.product.id)}
                >
                  remove
                </button>
              </Col>
            </Row>
          ))
        : "Your cart is empty"}
    </Container>
  );
};

export default Cart;
