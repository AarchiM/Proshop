import { Link, useParams } from "react-router-dom"
// import Products from "../../Products";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductScreen = () => {
    const {id: productId} = useParams();
    const [product, setProduct] = useState([]);
  
  useEffect(()=>{
    const fetchProduct = async () =>{
      const {data} = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    }
    fetchProduct();     
  },[productId])
    
  return (
    <div>
        <Link className="btn btn-light my-3" to='/'>
        Go Back
        </Link>
        <Row>
            <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description: ${product.description}
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md={3}>
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>Price: </Col>
                            <Col><strong>$ {product.price}</strong></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Stock: </Col>
                            <Col><strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-block' 
                        type='button'
                        disabled={product.countInStock === 0}>Add To Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            </Col>
        </Row>
    </div>
  )
}

export default ProductScreen
