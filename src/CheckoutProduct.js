import React from 'react';
import "./CheckoutProduct.css";
import { useStatevalue } from "./StateProvider";


function CheckoutProduct({id,title,price,rating,image}) 
{
  const [{ basket },dispatch] = useStatevalue();
  console.log(id,title,price,rating,image);
  const removefrombasket=()=>
  {
   dispatch ({
     type:"REMOVE_FROM_BASKET",
     id:id,
   }
   
    );
  };
    return (
        <div  className="checkoutproduct">
      <img className="checkoutproduct_image" src={image} alt ="/"/>
   
    
      <div className="checkoutproduct_info">
                  <p className="checkoutproduct_id">{id}</p>
                  <p className="checkoutproduct_title">{title}</p>
                  <p className="checkoutproduct__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                    </p>
                   <div className="checkoutproduct__rating">
                   {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>
                   ))}
                 
               
                </div>
                <button className="remove" onClick={removefrombasket}>Remove iteams from basket</button>
                </div>

      </div>
          
    
        
    );
};

export default CheckoutProduct;
