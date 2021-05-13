import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const Product = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getProducts()
  //     .then((res) => setProducts(res))
  //     .catch((error) => console.log(error));
  // }, []);

  const { products, setProducts } = useContext(ProductContext);

  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");

  const history = useHistory();

  const allProducts = () => {
    setFilter(products);
  };

  const mens = () => {
    const newProducts = products.filter(
      (products) => products.category === "men's clothing"
    );
    console.log("mens filter", newProducts);
    setFilter(newProducts);
    setSearch("");
  };

  const women = () => {
    const newProducts = products.filter(
      (products) => products.category === "women's clothing"
    );
    setFilter(newProducts);
    setSearch("");
  };

  // API spelled jewelry as jewelery
  const jewelery = () => {
    const newProducts = products.filter(
      (products) => products.category === "jewelery"
    );
    setFilter(newProducts);
    setSearch("");
  };

  const electronics = () => {
    const newProducts = products.filter(
      (products) => products.category === "electronics"
    );
    setFilter(newProducts);
    setSearch("");
  };

  const ascendingPrice = () => {
    const sortProducts = products.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );

    const sortFilteredProducts = filter.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );

    if (filter > 0) {
      setFilter([...sortFilteredProducts]);
    }
    setProducts([...sortProducts]);
    console.log(products);
  };

  const descendingPrice = () => {
    const sortProducts = products.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );

    const sortFilteredProducts = filter.sort(
      (a, b) => parseFloat(b.price) - parseFloat(a.price)
    );

    if (filter > 0) {
      setFilter([...sortFilteredProducts]);
    }
    setProducts([...sortProducts]);
    console.log(products);
  };

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

    setFilter([...searchedProduct]);
  };

  return (
    <Row stile={{ margin: 0, padding: 0, width: "100%" }}>
      <Col
        style={{
          // display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        sm={2}
      >
        <h4 style={{ marginTop: 10 }}>Categories</h4>
        <Row
          style={{
            marginTop: 10,
          }}
        >
          <button
            style={{
              marginTop: 10,
              border: "none",
              padding: 0,
              background: "none",
            }}
            onClick={allProducts}
          >
            All
          </button>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <button
            style={{
              marginTop: 10,
              border: "none",
              padding: 0,
              background: "none",
            }}
            onClick={mens}
          >
            Men
          </button>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <button
            style={{
              marginTop: 10,
              border: "none",
              padding: 0,
              background: "none",
            }}
            onClick={women}
          >
            Women
          </button>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <button
            style={{
              marginTop: 10,
              border: "none",
              padding: 0,
              background: "none",
            }}
            onClick={jewelery}
          >
            Jewelry
          </button>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <button
            style={{
              marginTop: 10,
              border: "none",
              padding: 0,
              background: "none",
            }}
            onClick={electronics}
          >
            Electronics
          </button>
        </Row>
        <Row
          style={{
            marginTop: 20,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <form
            style={{ display: "inline-block" }}
            name="searchForm"
            onSubmit={handleSearchSubmit}
          >
            <input
              style={{ width: 100 }}
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
            />
            <input
              style={{ width: 100, marginTop: 5 }}
              type="submit"
              value="Search"
            />
          </form>
        </Row>
      </Col>

      <Col style={{ margin: 0, padding: 0 }}>
        {/* <form name="searchForm" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
            />
            <input type="submit" name="Search" />
          </form> */}
        <Container
          style={{
            backgroundColor: "lightgray",
            borderRadius: "15px",
            border: "1px solid black",
            marginTop: 20,
          }}
        >
          <Row
            style={{
              width: "100%",
              margin: 0,
              padding: 0,
              background: "none",
              border: "none",
            }}
          >
            <p style={{ margin: 0, padding: 0, marginRight: 5 }}>
              Sort by price
              <button
                style={{
                  margin: 0,
                  padding: 0,
                  marginRight: 5,
                  background: "none",
                  border: "none",
                }}
                onClick={ascendingPrice}
              >
                ▲
              </button>
              <button
                style={{
                  margin: 0,
                  padding: 0,
                  background: "none",
                  border: "none",
                }}
                onClick={descendingPrice}
              >
                ▼
              </button>
            </p>
          </Row>
          {filter.length > 0
            ? filter.map((product) => (
                <Row
                  style={{
                    marginTop: 20,
                    paddingBottom: 10,
                    borderBottom: "1px solid gray",
                  }}
                >
                  <Col sm={3} key={product.id}>
                    <img
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 100,
                      }}
                      src={product.image}
                      alt={product.title}
                    />
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: 0,
                    }}
                  >
                    <h6>{product.title}</h6>
                    <p>${product.price}</p>
                    <button
                      style={{
                        width: 100,
                        margin: 10,
                        borderRadius: "15px",
                        backgroundColor: "lightgray",
                      }}
                      onClick={() => history.push(`/product/${product.id}`)}
                    >
                      Details
                    </button>
                  </Col>
                </Row>
              ))
            : products.map((product) => (
                <Row
                  style={{
                    marginTop: 20,
                    paddingBottom: 10,
                    borderBottom: "1px solid gray",
                  }}
                >
                  <Col sm={3} key={product.id}>
                    <img
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: 100,
                      }}
                      src={product.image}
                      alt={product.title}
                    />
                  </Col>
                  <Col
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: 0,
                    }}
                  >
                    <h6>{product.title}</h6>
                    <p>${product.price}</p>
                    <button
                      style={{
                        width: 100,
                        margin: 10,
                        borderRadius: "15px",
                        backgroundColor: "lightgray",
                      }}
                      onClick={() => history.push(`/product/${product.id}`)}
                    >
                      Details
                    </button>
                  </Col>
                </Row>
              ))}
        </Container>
      </Col>
    </Row>
  );
};

export default Product;
