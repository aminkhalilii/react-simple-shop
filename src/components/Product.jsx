import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";

const Product = ({ product }) => {
	const { cart, addToCart, removeFromCart } = useContext(ShopContext);
	return (
		<div className="card bg-base-100 w-96 shadow-xl">
			<figure className="px-10 pt-10">
				<img
					src={product.productImage}
					alt="Shoes"
					className="rounded-xl shadow-md"
				/>
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{product.productName}</h2>
				<p>{product.price}$ </p>
				<div className="card-actions">
					<button
						onClick={() => {
							addToCart(product.id);
						}}
						className="btn btn-success btn-sm"
					>
						+
					</button>
					<span className="mx-2 mt-1">
						{cart.find((item) => item.id === product.id)?.count || 0}
					</span>
					{cart.find((item) => item.id === product.id)?.count > 0 && (
						<button
							onClick={() => {
								removeFromCart(product.id);
							}}
							className="btn btn-warning btn-sm"
						>
							-
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Product;
