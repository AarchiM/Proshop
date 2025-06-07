import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
// import Products from "../../Products"
// import axios from "axios";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   try {
  //     const fetchProducts = async () => {
  //       const { data } = await axios.get("/api/products");
  //       setProducts(data || []);
  //     };
  //     fetchProducts();
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // }, []);

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
    {
      isLoading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) :
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
    }
    </>
  );
};

export default HomeScreen;
