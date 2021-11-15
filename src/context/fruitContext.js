import React,{createContext,useReducer,useEffect} from 'react';
import fruitReducer from '../store/fruitReducer/reducer';
import { fruitAction } from '../store/actions/fruitActions';
import fruit from '../data';
import Axios from "axios";

export const FruitsContext = createContext();

export default  function FruitsContextProvider({}){ 
 const [state, dispatch] = useReducer(fruitReducer,fruit);

 useEffect(()=>{
   function  fetchFruit(){
       let response = await Axios({
           method:"GET",
           url:"http://localhost:5000/fruit/",
       });
       dispatch(fruitAction.setFruits(response.data));
   }

   fetchFruit();
    

 }, []);

}