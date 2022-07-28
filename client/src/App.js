import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import AddBook from './Pages/AddBook';
import Header from './Components/Header';
import UpdateBook from './Pages/UpdateBook';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbooks" element={<AddBook/>} />
        <Route path="/update/:id" element={<UpdateBook/>} />
      </Routes>
    </BrowserRouter>



   
    
    </>
  );
}

export default App;
