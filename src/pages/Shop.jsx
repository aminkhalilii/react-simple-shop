import { useContext } from "react";
import Product from "../components/Product";
import { productsContext } from "../App";
const Shop = () => {
	const { products } = useContext(productsContext);
	return (
		<div>
			<h1 className="text-center text-3xl my-5">shop</h1>
			<div className="flex flex-wrap justify-center gap-6 px-6">
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default Shop;
