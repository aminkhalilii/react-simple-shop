import { createContext, useState } from "react";

export const ShopContext = createContext(null);
export const ShopContextProvider = (props) => {
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
	const contextValues = {
		cart,
		addToCart,
		removeFromCart,
	};
	return (
		<ShopContext.Provider value={contextValues}>
			{" "}
			{props.children}
		</ShopContext.Provider>
	);
};
