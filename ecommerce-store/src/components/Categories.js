import React from "react";
import { ApiCategories } from "../Api/CategoryApi";
import Category from "./Category";
const Categories = () => {
	return (
		<div className='flex justify-between items-center p-5 '>
			{ApiCategories.map((item, index) => (
				<Category item={item} key={index} />
			))}
		</div>
	);
};

export default Categories;
