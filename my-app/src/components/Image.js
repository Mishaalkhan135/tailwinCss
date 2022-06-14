import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}

export default function QuiltedImageList() {
	return (
		<ImageList className='w-full h-full mt-10 cursor-pointer'>
			{itemData.map((item) => (
				<ImageListItem
					className='w-full object-cover flex justify-center items-center '
					key={item.img}
					cols={item.cols || 1}
					rows={item.rows || 1}
				>
					<img
						{...srcset(item.img, 121, item.rows, item.cols)}
						alt={item.title}
						loading='lazy'
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
}

const itemData = [
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHrd8AxT_YbG_Cya-GnBOStW-2esGjcNlJKA&usqp=CAU",
		title: "Rolex-green",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-VJcADCt0QM6NQdvDvxujT12pZVYiWD6Vi56QP2_lTIyIOsDDDj3G37YhuboZ6heaVKQ&usqp=CAU",
		title: "Rolex",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7A84m_ZdlY2ij8v2KUO4VOeehtYqiryR9eRFMvmkiaw7d71g5kOPUf9XPAklfrn1Q78g&usqp=CAU",
		title: "Rolex",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOcbhKu84JcP3Jj31vZ4GzW6cCgn9xk14j80k3qCSmwJ8ndewtfCuKot1Inh2NK9faNpU&usqp=CAU",
		title: "Rolex",
		cols: 2,
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizESF_Iyy2dujGQwTmtROzbFaEzGsn1wOjTlc0laWvj2zQSxX5b-EFtWHnlniMo6u5iw&usqp=CAU",
		title: "Rolex",
		cols: 2,
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahuPa_XJyX4zO01WDjK2TJYQpERqQtaj0RQ&usqp=CAU",
		title: "Rolex",
		author: "@arwinneil",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbaZkc1vi1fFaALd2Na6wulbivVHyFBPw5Bw&usqp=CAU",
		title: "Rolex",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbf6lRnOEBd0g6ptPx1AtOTM_oAamsbYbTOA&usqp=CAU",
		title: "Rolex",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyQ_xUqNaz7NQs46AP8cO5cB_j23F82F41Q&usqp=CAU",
		title: "Rolex",
		rows: 2,
		cols: 2,
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSnmt8cKHVRw1y-l4co3n5pNq5b2IVPUpTlA&usqp=CAU",
		title: "Rolex",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEbau3NFLiFNkXB5lOv1jVUuYQC2uloP7VQ&usqp=CAU",
		title: "Rolex",
	},
	{
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnAXte8FP_S5IXrw3YC3XHXoSBmzWug_YhQ&usqp=CAU",
		title: "Rolex",
		cols: 2,
	},
];
