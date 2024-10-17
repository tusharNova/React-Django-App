import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ShowProduct = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/");
    console.log(response.data);
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-item-show">
      {products.map((product, index) => (
        <Card key={product.id} className="m-2 rounded shadow-lg" style={{ width: "22rem" }}>
          <Card.Img variant="top" src={product.images} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price} </Card.Text>
            <Card.Text>{product.description} </Card.Text>
            <Card.Text>{product.category} </Card.Text>
            <Button variant="primary">Show Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ShowProduct;
