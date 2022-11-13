import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';
import AddHotel from './pages/addHotel/AddHotel';
import Register from './pages/register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/accomodations" element={<List />} />
        <Route path="/accomodation" element={<Hotel />} />
        <Route path="/addhotel" element={<AddHotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
