import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Detect from './components/Detect';
import Exercise from './components/Exercise';

import { Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/service" element={<Services/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/detect" element={<Detect/>}></Route>
      <Route path="/exercise" element={<Exercise/>}></Route>


   </Routes>
   <Footer/>
   </>
  );
}

export default App;
