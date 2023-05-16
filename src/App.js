

import CartContent from './Components/CartContent/CartContent';
import Contacto from './Components/Contacto/Contacto';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Tienda from './Components/Tienda/Tienda';
import Inicio from './Components/Inicio/Inicio';
import DataProvider from './Components/Context/DataContext';

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
    </Routes>
    
    </BrowserRouter>    
    </DataProvider>
    
  );
}

export default App;
