
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [image, setImage] = useState(null); // Store the image file
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  // Handle file input
  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Grab the first file (single file input)
  };

  const AddProducts = async (e) => {
    e.preventDefault(); // Prevent form submission refresh

    let formField = new FormData();
    
    // Append other form fields
    formField.append("name", name);
    formField.append("price", price);
    formField.append("description", description);
    formField.append("category", category);
    // Append the image file, but with correct key 'images'
    if (image) {
      formField.append("images", image); // Use 'images' if that's what the backend expects
    }

    try {
      // Make the POST request with axios
      const response = await axios.post("http://127.0.0.1:8000/api/", formField, {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      });

      console.log(response.data);
      navigate("/"); // Navigate on success
    } catch (error) {
      console.error("Error uploading product:", error.response || error);
    }
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <form onSubmit={AddProducts}>
        <div className="form-group mt-2">
          <label htmlFor="image">Select Image To Upload</label>
          <input
            type="file"
            className="form-control form-control-lg"
            name="image"
            onChange={handleImageChange} // Handle file input
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
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
