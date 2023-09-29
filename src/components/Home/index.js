import React, { useEffect, useState, createContext, } from "react";
import Firstcomponent from "./Firstcomponent";
import axios from "axios";

export const ProductContext = createContext();
export default function Home(){
    const [products,setProducts]=useState([]);
    const [refresh,setRefresh] = useState(false)

    console.log("REACT_APP_BASEURL",process.env.REACT_APP_BASEURL);

    useEffect(()=>{
        GetDataFunc()
    },[refresh]);

    const GetDataFunc= async()=>{
        // https://fakestoreapi.com/products
        let response = await axios.get(`${process.env.REACT_APP_BASEURL}
        `)
        setProducts(response.data);
    }
    console.log("products",products);


   const handleDeleteproduct=async(id)=>{
    // https://fakestoreapi.com/products/6

    let delproduct = await axios.delete(`${process.env.REACT_APP_BASEURL}/${id}`)
    console.log("handleDeleteproduct",delproduct)
    setRefresh(!refresh)
   }

   return(<>
    <ProductContext.Provider value={[products,handleDeleteproduct]}>

    <div className="container">
        <div className="m-5 p-5">
        <div className="p-4">

    Index Page
    <p>
    
    </p>
        </div>
    
    <Firstcomponent/>
        </div>

    </div>
    </ProductContext.Provider>
    
    </>);
}