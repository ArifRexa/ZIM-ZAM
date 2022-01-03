import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
       
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
