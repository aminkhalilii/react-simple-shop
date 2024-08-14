import { useState } from "react";

export const UseCart = () => {
    const [cart, setCart] = useState([]);
    const addToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
          setCart(
            cart.map((item) => {
              if (item.id === id) {
                return { ...item, count: item.count + 1 };
              }
              return item;
            })
          );
        } else {
          setCart([...cart, { id: id, count: 1 }]);
        }
      };
      const removeFromCart = (id) => { 
        setCart(
          cart.map((item) => {
            if (item.id === id)
              return { ...item, count: item.count > 0 ? item.count - 1 : 0 };
            return item;
          })
        );
      };
      return {cart,addToCart,removeFromCart}

} 
