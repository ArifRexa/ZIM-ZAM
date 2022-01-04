import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DashBoard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
       
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
         <Route path="/dashboard" element={<DashBoard />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
