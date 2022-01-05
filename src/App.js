import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Placeorder from './components/Placeorder';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/products" element={<Products />} />
         <Route path="/placeorder/:orderId" element={<Placeorder />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/login" element={<Login />} />
         
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
