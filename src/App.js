import CartContent from './Components/CartContent/CartContent';
import Contacto from './Components/Contacto/Contacto';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Tienda from './Components/Tienda/Tienda';
import Inicio from './Components/Inicio/Inicio';
import DataProvider from './Components/Context/DataContext';
import Item from './Components/Item/Item';
import ProductDetailsCategory from './Components/Categorias/ProductDetailsCategory';
import Ferrari from './Components/Marcas/Ferrari';
import Lamborghini from './Components/Marcas/Lamborghini';
import Masseraiti from './Components/Marcas/Masseraiti';






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
      <Route path='/products/:categoria' element={<ProductDetailsCategory/>}/>
      <Route path='/ferrari' element={<Ferrari/>}/>
      <Route path='/lamborghini' element={<Lamborghini/>}/>
      <Route path='/masserati' element={<Masseraiti/>}/>
    </Routes>
    
    </BrowserRouter>    
    </DataProvider>
    
  );
}

export default App;
