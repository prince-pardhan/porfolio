import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Parsanal from './Parsanal/Parsanal';
import About from './Parsanal/About.jsx';
import Motavison from './Parsanal/Motavison.jsx';
import Footer from './Parsanal/Footer';





export default function App() {
  return (

    <BrowserRouter>
 
      <Routes>
        <Route path='/' element={<Parsanal />} />
        <Route path='/About' element={< About />} />
        <Route path='/Motavison' element={<Motavison />} />
        
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
} 


