import { useEffect, useState } from "react";
import React from 'react'
import Context from './Context'

function ContextProvider({children}) {
    
    let [data,setData]=useState([])
    let [cart,setCart]=useState([])
   useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response=>response.json())
    .then(products=>setData(products))
    .catch(err=>console.log('error occured',err))
   },[])
   
  return (
    <div>
        <Context.Provider value={[data,setData,cart,setCart]}>
            {children}
        </Context.Provider>
    </div>
  )
}

export default ContextProvider
