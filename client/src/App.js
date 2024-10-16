// import logo from './logo.svg';
import './App.css';
import AddProducts from './components/AddProducts';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// import ProductDetails from './components/ProductDetail';
import ShowProduct from './components/ShowProducts';
// import UpdateProduct from './components/UpdateProducts';
import NavBarMenu from './components/NavBarMenu';

import {BrowserRouter as Router , Route , Routes  } from 'react-router-dom'
import {} from 'react-dom'
function App() {
  return (
    <div className="App">
      <NavBarMenu/>
      <Router>
        <Routes>
          <Route exact path='/' Component={ShowProduct}/>
          <Route exact path='/AddProduct' Component={AddProducts}/>
          <Route exact path='/AddProduct' Component={AddProducts}/>
          <Route exact path='/AddProduct' Component={AddProducts}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
