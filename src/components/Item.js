import React, { useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function addToCartOnClick() {
    setInCart((inCart) => !inCart);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
    <span>{name}</span>
    <span className="category">{category}</span>
    <button
      className={inCart ? "remove" : "add"}
      onClick={addToCartOnClick}
    >
      {inCart ? "Remove From" : "Add to"} Cart
    </button>
  </li>
  );
}

export default Item;
