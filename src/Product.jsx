import { ListItemAvatar } from "@material-ui/core";
import React from "react";
import "./Product.css";
import { useStatevalue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStatevalue();

  const AddToBasket = () => {
    console.log(basket);
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        price: price,
        image: image,
        title: title,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product info">
        <p className="product_id">{id}</p>
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="no image" />
      <button className="product_button" onClick={AddToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
