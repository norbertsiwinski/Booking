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
import Accomodation from './pages/Accomodation/Accomodation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  /*
    const {data, loading, error} = useFetch("api/accomodation")
    console.log(data);
    */

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/accomodations" element={<List/>}/>
        <Route path="/accomodations/:id" element={<Accomodation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
