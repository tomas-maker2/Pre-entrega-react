import CartContent from './Components/CartContent/CartContent';
import Contacto from './Components/Contacto/Contacto';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from './Components/Inicio/Inicio';
import DataProvider from './Components/Context/DataContext';
import Tienda from './Components/Tienda/Tienda';
import Detalles from './Components/Detalles/Detalles';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    
    <DataProvider>
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/cart' element={<CartContent/>}/>
      <Route path='/tienda' element={<Tienda/>}/>
      <Route path='/tienda/:id' element={<Detalles/>}/>  
    </Routes>
    
    <Footer/>
    </BrowserRouter>    
    </DataProvider>
    
  );
}

export default App;
