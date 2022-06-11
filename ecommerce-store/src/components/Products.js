import React from "react";
import { TopProductApi } from "../Api/TopProductApi";
import Product from "./Product";
const Products = () => {
	return (
		<div className='flex flex-wrap p-5 items-center justify-center'>
			{TopProductApi.map((item, index) => (
				<Product item={item} key={index} />
			))}
		</div>
	);
};

export default Products;
