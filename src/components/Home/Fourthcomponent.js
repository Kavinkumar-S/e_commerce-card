import React,{useContext} from "react";
import {ProductContext} from "./index";


export default function Fourthcomponent(){
    const [products,handleDeleteproduct ]= useContext(ProductContext);
    console.log("products in fourth component",products);
    return(<>
<div className="p-4">

    Fourth component
        <div className="d-flex justify-content-between flex-wrap">
{products && products.map((val)=>


        <div className="card mb-5" style={{width: "20rem"}} key={val.id}>
  <img src={val.image} className="card-img-top" alt="..." style={{width:"150px",margin:"10px auto"}}/>
  <div className="card-body">
    <h5 className="card-title">{val.title}</h5>
    <p className="card-text">
        {val.category}
    </p>
    <p className="card-text">
    {val.price}
    </p>
  <div className="d-flex justify-content-between">
    <a href="#" className="btn btn-primary">Add to Cart</a>
    <a className="btn btn-danger" 
    onClick={
        ()=>{
            handleDeleteproduct(val.id)
            
        }
    }
    >Delete</a>

    </div>
  </div>
    </div>
)
    
    }



        </div>


</div>
    
    </>)
}