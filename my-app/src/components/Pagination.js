import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded() {
	return (
		<Stack className='flex justify-center items-center md:w-full w-full'>
			<Pagination count={5} variant='outlined' shape='rounded' />
		</Stack>
	);
}
