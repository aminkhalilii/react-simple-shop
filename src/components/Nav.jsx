import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";

const Nav = () => {
	const {cart} = useContext(ShopContext)
	return (
		<div className="navbar bg-base-100 shadow-md">
			<div className="flex-1">
				<Link className="btn btn-ghost text-xl">React Simple Shop</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">
					<li>
						<Link to="/">Home</Link>
					</li>
				</ul>
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
						<div className="indicator">
							<FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
							<span className="badge badge-sm indicator-item">{cart?.length}</span>
						</div>
					</div>
					<div
						tabIndex={0}
						className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
					>
						<div className="card-body">
							<span className="text-lg font-bold">8 Items</span>
							<span className="text-info">Subtotal: $999</span>
							<div className="card-actions">
								<Link to="/cart" className="btn btn-primary btn-block">
									View cart
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="dropdown dropdown-end">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="Tailwind CSS Navbar component"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
