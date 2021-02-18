import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket>>>>", basket);
  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div classNme="product_info">
        <p> {title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <img
                  className="product_star"
                  src="https://www.nicepng.com/png/full/863-8639994_stars-clipart-hollywood-rating-star-single-png.png"
                  alt=""
                />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="amazone product " />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
