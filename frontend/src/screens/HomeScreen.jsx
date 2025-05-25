import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
// import Products from "../../Products"
import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const { data } = await axios.get("/api/products");
        console.log("Products: ", data);
        setProducts(data || []);
      };
      fetchProducts();
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);
  return (
    <>
      <h1>Latest Product</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} lg={6} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
