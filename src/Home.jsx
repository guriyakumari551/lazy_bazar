import React from 'react';
import "./Home.css";
import Product from "./Product";
import "./Product.css";



const Home= ()=> {
    return (
        <div className="home">
          
        
        <img className="home_image" src="https://wgefund.org/wp-content/uploads/2016/11/AmazonSmilebanner.jpg"/>

         {/* 1st product Image,id,title,price,rating */}
            {/* 2nd product image,title,id,price,rating */}
          <div className="home_row">
          <Product
           id="122"
           title="boAt Rockerz 370 Wireless Headphone with Bluetooth 5.0, and Up to 12H Playback Bliss(Gregarious Green)"
           price={1,199.00}
           rating={4}
            image="	https://m.media-amazon.com/images/I/61KtuJrsKIL._SX679_.jpg"

          />
          

          
           <Product
           id="123"
           title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Taffy Pink)"
           price={378.00}
           rating={5}
            image="	https://m.media-amazon.com/images/I/719sf-DtkvL._SX679_.jpg"

          />
          
           
           
          </div>

          <div className="home_row">
          <Product
           id="123"
           title="Coding Sandpit Second edition Level 3 Student's Book
Coding Sandpit" 

           price={300.00}
           rating={6}
            image="https://images-na.ssl-images-amazon.com/images/I/51S+CY-1+XL._SX383_BO1,204,203,200_.jpg"

          />
          
          
          
           
          
          <Product
           id="123"
           title="Urban Forest Oliver RFID Blocking Blue Leather Wallet for Men"
           price={516.00}
           rating={6}
            image="https://images-eu.ssl-images-amazon.com/images/I/81zahATo1dL._AC_UL200_SR200,200_.jpg"

          
          />
        
           <Product
           id="123"
           title="Samsung Galaxy Z Fold3 5G (Phantom Black, 12GB RAM, 256GB Storage) 
"
           price={6449.00}
           rating={6}
            image="https://m.media-amazon.com/images/I/61Fd6h0yLJL._AC_SL1500_.jpg"

          />
          </div>
          <div className="home_row">
          <Product
           id="234"
           title="Rahi Fashion Women's Net Semi-stitched Salwar Suit (RJ080_Yellow_Yellow_Free Size)"
           price={636.00}
           rating={4}
            image="https://m.media-amazon.com/images/I/41uMLnPLjyL.jpg"

          />
          </div>

       </div>


          

         


       
        
    );
}

export default Home;

