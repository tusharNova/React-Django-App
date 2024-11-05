import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState("");

  const { id } = useParams();

  const getSingleProduct = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return (
    <div>
      <h1>Product Detail</h1>
      <div className="single-product-info">
        <img src={product.images} alt="" srcset="" height="200" width="300" />
        <p>{product.name}</p>
        <p>{product.price} </p>
        <p>{product.description} </p>
        <p>{product.category} </p>

        <Link className="btn btn-info m-2" to={`/${product.id}/update`}>Update</Link>
        <Link className="btn btn-danger m-2">Delete</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
