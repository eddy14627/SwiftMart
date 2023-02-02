import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    // here we want to fetch data from http://localhost:5000
    // but if we do then it will cause "cross domain error"
    // because when we don't give any "localhost" in this case it
    // will request from "localhost" of current domain which is
    // "localhost:3000" so to avoid "cross domain error" we setup
    // proxy in package.json
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
