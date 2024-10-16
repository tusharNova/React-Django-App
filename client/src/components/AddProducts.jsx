// import React, { useState } from "react";

// // createBootstrapComponent
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AddProduct = () => {
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     if (file) {
//       setImagePreview(URL.createObjectURL(file));
//     }
//   };

//   const AddProducts = async () => {
//     let formField = new FormData();

//     formField.append("name", name);
//     formField.append("price", price);
//     formField.append("description", description);
//     formField.append("category", category);
//     if (image != null) {
//       formField.append("image", image);
//     }

//     // Log the form data for debugging
//     for (let pair of formField.entries()) {
//       console.log(pair[0] + ": " + pair[1]);
//     }

//     try {
//       // Make API request
//       const response = await axios({
//         method: "post",
//         url: "http://127.0.0.1:8000/api/",
//         data: formField,
//         headers: {
//           "Content-Type": "multipart/form-data", // Required for file uploads
//         },
//       });

//       console.log(response.data);
//       navigate("/"); // Redirect after successful post
//     } catch (error) {
//       if (error.response) {
//         console.log("Error data:", error.response.data);
//         console.log("Error status:", error.response.status);
//         console.log("Error headers:", error.response.headers);
//         setErrorMessage(error.response.data.message || "An error occurred");
//       } else if (error.request) {
//         console.log("Error request:", error.request);
//         setErrorMessage("No response from server.");
//       } else {
//         console.log("Error message:", error.message);
//         setErrorMessage("Something went wrong.");
//       }
//     }
//   };

//   return (
//     <>
//       {/* <div className="h2 display-3">AddProducts</div> */}
//       <div className="container">
//         <h1>Add Products</h1>
//         {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display errors */}
//         <div className="form-group mt-2">
//           <label htmlFor="image">Select Image To Upload</label>
//           {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: "200px" }} />} {/* Image Preview */}
//           <img src={imagePreview} alt="Preview" />
//           <input
//             type="file"
//             className="form-control form-control-lg"
//             placeholder="Enter Product File"
//             name="image"
//             onChange={handleImageChange}
//           />
//         </div>
//         <div className="form-group mt-2">
//           <input
//             type="text"
//             className="form-control form-control-lg"
//             placeholder="Enter Product Name"
//             name="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group mt-2">
//           <input
//             type="text"
//             className="form-control form-control-lg"
//             placeholder="Enter Product Price"
//             name="price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//         </div>
//         <div className="form-group mt-2">
//           <textarea
//             className="form-control form-control-lg"
//             placeholder="Enter Product Description"
//             name="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <div className="form-group mt-2">
//           <input
//             type="text"
//             className="form-control form-control-lg"
//             placeholder="Enter Product Category"
//             name="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//           />
//         </div>
//         <button className="btn btn-primary" onClick={AddProducts}>
//           Add Products
//         </button>
//       </div>
//     </>
//   );
// };

// export default AddProduct;
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For displaying errors

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null); // Reset preview if no file is selected
    }
  };

  const AddProducts = async () => {
    let formField = new FormData();

    // Append form data fields
    formField.append("name", name);
    formField.append("price", price);
    formField.append("description", description);
    formField.append("category", category);
    if (image != null) {
      formField.append("image", image);
    }

    // Log the form data for debugging
    for (let pair of formField.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
      // Make API request
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/",
        data: formField,
        headers: {
          "Content-Type": "multipart/form-data", // Required for file uploads
        },
      });

      console.log(response.data);
      navigate("/"); // Redirect after successful post
    } catch (error) {
      if (error.response) {
        console.log("Error data:", error.response.data);
        console.log("Error status:", error.response.status);
        console.log("Error headers:", error.response.headers);
        setErrorMessage(error.response.data.message || "An error occurred");
      } else if (error.request) {
        console.log("Error request:", error.request);
        setErrorMessage("No response from server.");
      } else {
        console.log("Error message:", error.message);
        setErrorMessage("Something went wrong.");
      }
    }
  };

  return (
    <>
      <div className="container">
        <h1>Add Products</h1>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Display errors */}

        <div className="form-group mt-2">
          <label htmlFor="image">Select Image To Upload</label>
          {imagePreview && <img src={imagePreview} alt="Preview" style={{ maxWidth: "200px" }} />} {/* Image Preview */}
          <input
            type="file"
            className="form-control form-control-lg"
            placeholder="Enter Product File"
            name="image"
            accept="image/*" // Ensures only images can be selected
            onChange={handleImageChange}
            required // Make the field required
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
            required // Make the field required
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
            required // Make the field required
          />
        </div>
        <div className="form-group mt-2">
          <textarea
            className="form-control form-control-lg"
            placeholder="Enter Product Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required // Make the field required
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
            required // Make the field required
          />
        </div>
        <button className="btn btn-primary mt-3" onClick={AddProducts}>
          Add Product
        </button>
      </div>
    </>
  );
};

export default AddProduct;
