import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Nav from "./components/Nav";
import { createContext } from "react";
import { PRODUCTS } from "./data/products";
import { ShopContextProvider } from "./contexts/ShopContext";
export const productsContext = createContext(null);

function App() {
	return (
		<div className="App">
			<ShopContextProvider>
				<productsContext.Provider value={{ products: PRODUCTS }}>
					<Router>
						<Nav />
						<Routes>
							<Route path="/" element={<Shop />} />
							<Route path="/cart" element={<Cart />} />
						</Routes>
					</Router>
				</productsContext.Provider>
			</ShopContextProvider>
		</div>
	);
}

export default App;
