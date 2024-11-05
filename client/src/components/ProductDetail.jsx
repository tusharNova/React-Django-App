import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

 const ProductDetails = () => {

    const [product , setProduct] = useState("");

    const { id } = useParams();

    const getSingleProduct = async () => {
        const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
        console.log(data)
        setProduct(data)
    } 

    useEffect(() =>{
        getSingleProduct();
    } ,[])


    return (
        <div>
            <h1>Product Detail</h1>
            <div className='single-product-infos'>
                <p>{product.name}</p>
                <img src={product.images} alt="" srcset="" />
            </div>
        </div>
    )
}

export default ProductDetails;