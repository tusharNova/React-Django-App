import React, { useEffect, useState } from "react";

// createBootstrapComponent
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [description, setDescription] = useState(null);
  const [category, setCategory] = useState(null);

  const navigate = useNavigate();

  const AddProducts = async () => {
    let formField = new FormData();

    formField.append("name", name);
    formField.append("price", price);
    formField.append("description", description);
    formField.append("category", category);
    if (image != null) {
      formField.append("image", image);
    }

    await axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/',
      data: formField,
    })
      .then((response) => {
        console.log(response.data);
        navigate.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* <div className="h2 display-3">AddProducts</div> */}
      <div className="container">
        <h1>Add Products</h1>
        <div className="form-group mt-2">
          <label htmlFor="image">Select Image To Upload</label>
          <img src={image} alt="" />
          <input
            type="file"
            className="form-control form-control-lg"
            placeholder="Enter Product File"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Product Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Product Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <textarea
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Product Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Product Category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={AddProducts}>
          Add Products
        </button>
      </div>
    </>
  );
};

export default AddProduct;
