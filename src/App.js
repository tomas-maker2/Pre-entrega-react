import CartContent from './Components/CartContent/CartContent';
import Contacto from './Components/Contacto/Contacto';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Tienda from './Components/Tienda/Tienda';
import Inicio from './Components/Inicio/Inicio';
import DataProvider from './Components/Context/DataContext';
import Item from './Components/Item/Item';
import Marcas from './Components/Marcas/Marcas';




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
      <Route path='/productos/:productosId' element={<Item/>}/>
      <Route path='/productos/:category' element={<Marcas/>}/>
    </Routes>
    
    </BrowserRouter>    
    </DataProvider>
    
  );
}

export default App;
