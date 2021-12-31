import React from 'react';
import { useStatevalue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from "./Subtotal";



function Checkout() {
    const [{ basket }] = useStatevalue();

    return (
        <div className="checkout">
        <div className="checkout_left">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/0…UPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
            {
                basket?.length === 0 ?
                (



                    <div>
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>You have no item in your basket.To buy one or more items please add an items to the basket.</p>
                    </div>
                )



                : (
                 <div>
                    <h2 className="checkout_title">  Your Shopping Basket is Full</h2>

                     {
                    
                        basket.map((item) => {

                            console.log("print the items= ", item);
                            return (
                                <div>
                                <CheckoutProduct
            
                                    id={item.id}
                                    title={item.title}

                                    price={item.price}
                                    rating={item.rating}
                                    image={item.image}
                                />
                                </div>
                            );


                        })
                     }
                    
                        </div>
                     
                )


            }

                {
                    basket.length>0&&(<div className="checkout_right">
                    <h1>Subtotal</h1>,
                    <Subtotal/>
                    
                    </div>
                    )
                }

        </div>
       </div>

    );
};
export default Checkout;
