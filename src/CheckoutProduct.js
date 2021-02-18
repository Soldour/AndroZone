import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="CheckoutProduct">
      <img className="checkoutProduct_image" src={image} />

      <div className="CheckoutProduct_info">
        <p className="CheckoutProduct_title">{title}</p>
        <p className="CheckoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>
                {" "}
                <img
                  className="product_star"
                  src="https://www.nicepng.com/png/full/863-8639994_stars-clipart-hollywood-rating-star-single-png.png"
                  alt=""
                />
              </p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
