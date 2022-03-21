import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import "./Product.css";

const Product = ({ item }) => {
  // When i was using here this cartValue then each and individual product component has its own separate cartValue
  // But i want this one as  global so that on clicking on any item will get added to cart
  // then i will lift the state up

  //   const [cartValue, setCartValue] = useState([]);

  //   const addItemToCart = () => {
  //     setCartValue([...cartValue, item]);
  //     // console.log(cartValue.length)
  //     console.log(cartValue);
  //   };

  const value = useContext(CartContext);

  return (
    <div className="each-item">
      <div className="img-wrapper">
        <img src={item.searchImage} alt="product-img" />
      </div>
      <div className="content-wrapper">
        <h3 className="brand-name">{item.brand}</h3>
        <h4 className="brand-desc">{item.additionalInfo}</h4>
        <h5>
          <span className="b-d-price">Rs. {item.price}</span>
          {item.discountdisplayLabel ? (
            <span className="b-price">Rs.{item.mrp}</span>
          ) : null}
          <span className="b-discount">{item.discountdisplayLabel}</span>
        </h5>
        <button
          className={`add-to-cart-btn`}
          onClick={() => value.addItemToCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
