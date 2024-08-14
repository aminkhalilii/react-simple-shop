import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { PRODUCTS } from "../data/products";
import Product from "../components/Product" 

const Cart = () => {
	const {cart} = useContext(ShopContext);
	
	return <div>
		<h1 className="text-center text-3xl my-5">Your Cart Items</h1>
			<div className="flex flex-wrap justify-center gap-6 px-6">
				{PRODUCTS.map((product) => {
					if(cart.some((cartItem)=>cartItem.id === product.id && cartItem.count>0)){
						return	<Product key={product.id} product={product} />
					}
				})}
			</div>

	</div>;
};

export default Cart;
