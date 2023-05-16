import { createContext, useState , useEffect} from "react";
import axios from 'axios';

export const dataContext = createContext();

const DataProvider = ({children}) => {

    const [data , setData] =  useState([]);
    const [cart , setCart] =  useState([]); 

    useEffect(() => {
        axios("data.json").then((res) => setData(res.data));
    },[])

    const buyProducts = (product) => {
        const productRepeat = cart.find((item) => item.id === product.id);

        if (productRepeat) {
            setCart(cart.map((item)=> item.id === product.id ? {...product, quanty: productRepeat.quanty + 1} : item))
        }else {
            setCart([...cart, product]);
        }
    };

    return  <dataContext.Provider value={{data, cart, setCart, buyProducts}} >{children}</dataContext.Provider>;
};

export default DataProvider;