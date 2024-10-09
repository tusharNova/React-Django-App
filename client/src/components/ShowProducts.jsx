import React , {useState , useEffect} from 'react'
import axios from 'axios'
 const ShowProduct = () => {
    const [ products , setProducts] = useState([])
    const getProducts = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/');
        console.log(response.data);
    }
 
    useEffect(() =>{
        getProducts();
    } , []);



    return (
        <div className="h2 display-3">Show Poduct </div>
    )
}

export default ShowProduct;