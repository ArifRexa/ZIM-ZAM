import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
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
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
