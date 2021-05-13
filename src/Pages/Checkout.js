import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import CartContext from "../context/CartContext";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();

  let sum = 0;
  let itemSum = 0;

  cart.forEach((cart) => {
    sum += cart.product.price * cart.quantity;
  });

  cart.forEach((cart) => {
    itemSum += cart.quantity;
  });

  const submitOrder = () => {
    setCart([]);
    history.push("/");
  };

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
        <h1>Checkout</h1>
      </Row>
      <Row>
        {cart.length > 0 ? (
          <Col sm={8}>
            <Container
              style={{
                padding: 5,
                margin: 0,
                marginBottom: 10,
                border: "1px solid black",
                borderRadius: "15px",
                backgroundColor: "lightGray",
              }}
            >
              <form>
                <h3>1. Personal Information</h3>
                <input
                  style={{ margin: 5 }}
                  type="text"
                  placeholder="First Name"
                />
                <input
                  style={{ margin: 5 }}
                  type="text"
                  placeholder="Last Name"
                />
                <input style={{ margin: 5 }} type="email" placeholder="email" />
                <input
                  style={{ margin: 5 }}
                  type="number"
                  placeholder="Phone Number"
                />
              </form>
            </Container>

            <Container
              style={{
                padding: 5,
                margin: 0,
                marginBottom: 10,
                border: "1px solid black",
                borderRadius: "15px",
                backgroundColor: "lightGray",
              }}
            >
              <form>
                <h3>2. Shipping address</h3>
                <input
                  style={{ margin: 5 }}
                  type="text"
                  placeholder="Address"
                />
                <input style={{ margin: 5 }} type="text" placeholder="City" />
                <input style={{ margin: 5 }} type="text" placeholder="State" />
                <input
                  style={{ margin: 5 }}
                  type="number"
                  placeholder="Zip Code"
                />
              </form>
            </Container>
            <Container
              style={{
                padding: 5,
                margin: 0,
                marginBottom: 10,
                border: "1px solid black",
                borderRadius: "15px",
                backgroundColor: "lightGray",
              }}
            >
              <form>
                <h3>3. Billing address</h3>
                <input
                  style={{ margin: 5 }}
                  type="text"
                  placeholder="Address"
                />
                <input style={{ margin: 5 }} type="text" placeholder="City" />
                <input style={{ margin: 5 }} type="text" placeholder="State" />
                <input
                  style={{ margin: 5 }}
                  type="number"
                  placeholder="Zip Code"
                />
              </form>
            </Container>
            <Container
              style={{
                padding: 5,
                margin: 0,
                marginBottom: 10,
                border: "1px solid black",
                borderRadius: "15px",
                backgroundColor: "lightGray",
              }}
            >
              <form>
                <h3>4. Payment Method</h3>
                <input
                  style={{ margin: 5 }}
                  type="number"
                  placeholder="Credit Card/ Debit Card Number"
                />
                <input
                  style={{ margin: 5 }}
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  style={{ margin: 5 }}
                  type="number"
                  placeholder="MM/YY"
                  maxLength="5"
                />
                <input
                  style={{ margin: 5 }}
                  type="number"
                  placeholder="Zip Code"
                />
              </form>
              <button
                style={{
                  margin: 10,
                  borderRadius: "15px",
                  backgroundColor: "lightgray",
                }}
                onClick={submitOrder}
              >
                Submit Order
              </button>
            </Container>
          </Col>
        ) : (
          <h1>Your cart is empty!</h1>
        )}
        <Col>
          {cart.length > 0 ? (
            <Container
              style={{
                padding: 5,
                margin: 0,
                border: "1px solid black",
                borderRadius: "15px",
                backgroundColor: "lightGray",
              }}
            >
              <Row
                style={{
                  marginTop: 20,
                }}
              >
                <h3>Shopping Cart</h3>
                <p style={{ margin: 0 }}>
                  Total ({itemSum} items): ${sum}{" "}
                </p>
              </Row>
              <hr style={{ margin: 0 }} />
              {cart.map((products) => (
                <>
                  <hr style={{ margin: 0 }} />
                  <Row style={{ marginTop: 10 }} key={products.product.id}>
                    <p>{products.product.title}</p>
                    <p>Qty: {products.quantity} </p>
                    <p>${products.product.price}</p>
                  </Row>
                </>
              ))}
            </Container>
          ) : (
            <p></p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
