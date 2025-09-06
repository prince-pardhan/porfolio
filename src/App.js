import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Parsanal from './Parsanal/Parsanal';
import About from './Parsanal/About.jsx';
import Motavison from './Parsanal/Motavison.jsx';
import 
Login from './Parsanal/Login.jsx';

import Footer from './Parsanal/Footer';





export default function App() {
  return (

    <BrowserRouter>
 
      <Routes>
        <Route path='/' element={<Parsanal />} />
        <Route path='./' element={<Login />} />
       
        
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
} 


