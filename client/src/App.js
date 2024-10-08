import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import ProductDetails from './components/ProductDetail';
import ShowProduct from './components/ShowProducts';
import UpdateProduct from './components/UpdateProducts';
function App() {
  return (
    <div className="App">
      <AddProducts/>
      <ProductDetails/>
      <ShowProduct/>
      <UpdateProduct/>
    </div>
  );
}

export default App;
