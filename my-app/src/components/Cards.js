import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(190de)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function RecipeReviewCard() {
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div className='grid md:grid-cols-3 grid-flow-row gap-3 p-2 w-[100%] h-[100%]'>
			<Card className='bg-white w-[100%] shadow-2xl mt-10 border-2 border-gray-300 '>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Rolex New Designs'
					subheader='June 16, 2022'
				/>
				<img
					src='https://tse1.mm.bing.net/th?id=OIP.FxTdh1eAdFFO3POez-8IEgHaE7&pid=Api&P=0&w=230&h=153'
					alt='rolex image'
					className='w-full h-72'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun
						meal to cook together with your guests. Add 1 cup of
						frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography className='underline' paragraph>
							Discription
						</Typography>
						<Typography paragraph>
							Rolex mostly produced mechanical watches, but it has
							also participated in the development of the original
							quartz watch movements.
						</Typography>
						<Typography paragraph>
							Although Rolex has made very few quartz models for
							its Oyster line, the company's engineers were
							instrumental in design and implementation of the
							technology during the late 1960s and early 1970s. In
							1968, Rolex collaborated with a consortium of 16
							Swiss watch manufacturers to develop the Beta 21
							quartz movement used in their Rolex Quartz Date 5100
							alongside other manufactures including the Omega
							Electroquartz watches.[31] Within about five years
							of research, design, and development, Rolex created
							the "clean-slate" 5035/5055 movement that would
							eventually power the Rolex 'Oysterquartz.
						</Typography>
						<Typography paragraph>
							Material-wise, Rolex first used its "Cerachrom"
							ceramic bezel on the GMT-Master II in 2005, and has
							since then implemented ceramic bezel inserts across
							the range of professional sports watches. They are
							available on the Submariner, Sea Dweller, Deepsea,
							GMT Master II and Daytona models. In contrast to the
							aluminum bezel which it replaced, the ceramic bezel
							color does not wear out from exposure to UV-light
							and is very scratch resistant
						</Typography>
						<Typography>
							Rolex produced specific models suitable for the
							extremes of deep-sea diving, caving, mountain
							climbing, polar exploration, and aviation. Early
							professional models included the Rolex Submariner
							(1953) and the Rolex Sea Dweller (1967). The latter
							watch has a helium release valve, co-invented with
							Swiss watchmaker Doxa, to release helium gas
							build-up during decompression.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
			<Card className='bg-white w-[100%] shadow-2xl mt-10 border-2 border-gray-300'>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Rolex New Designs'
					subheader='June 16, 2022'
				/>
				<img
					src='https://tse3.mm.bing.net/th?id=OIP.UXFHOz7l93nEPw4tzc0EdQHaHa&pid=Api&P=0&w=153&h=153'
					alt='rolex image'
					className='w-full h-72'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun
						meal to cook together with your guests. Add 1 cup of
						frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography className='underline' paragraph>
							Discription
						</Typography>
						<Typography paragraph>
							Rolex mostly produced mechanical watches, but it has
							also participated in the development of the original
							quartz watch movements.
						</Typography>
						<Typography paragraph>
							Although Rolex has made very few quartz models for
							its Oyster line, the company's engineers were
							instrumental in design and implementation of the
							technology during the late 1960s and early 1970s. In
							1968, Rolex collaborated with a consortium of 16
							Swiss watch manufacturers to develop the Beta 21
							quartz movement used in their Rolex Quartz Date 5100
							alongside other manufactures including the Omega
							Electroquartz watches.[31] Within about five years
							of research, design, and development, Rolex created
							the "clean-slate" 5035/5055 movement that would
							eventually power the Rolex 'Oysterquartz.
						</Typography>
						<Typography paragraph>
							Material-wise, Rolex first used its "Cerachrom"
							ceramic bezel on the GMT-Master II in 2005, and has
							since then implemented ceramic bezel inserts across
							the range of professional sports watches. They are
							available on the Submariner, Sea Dweller, Deepsea,
							GMT Master II and Daytona models. In contrast to the
							aluminum bezel which it replaced, the ceramic bezel
							color does not wear out from exposure to UV-light
							and is very scratch resistant
						</Typography>
						<Typography>
							Rolex produced specific models suitable for the
							extremes of deep-sea diving, caving, mountain
							climbing, polar exploration, and aviation. Early
							professional models included the Rolex Submariner
							(1953) and the Rolex Sea Dweller (1967). The latter
							watch has a helium release valve, co-invented with
							Swiss watchmaker Doxa, to release helium gas
							build-up during decompression.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
			<Card className='bg-white w-[100%] shadow-2xl mt-10 border-2 border-gray-300 '>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Rolex New Designs'
					subheader='June 16, 2022'
				/>
				<img
					src='https://tse2.mm.bing.net/th?id=OIP.O5XeqCheX59wQGnrHBbr4wHaHV&pid=Api&P=0&w=154&h=153'
					alt='rolex image'
					className='w-full h-72'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun
						meal to cook together with your guests. Add 1 cup of
						frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography className='underline' paragraph>
							Discription
						</Typography>
						<Typography paragraph>
							Rolex mostly produced mechanical watches, but it has
							also participated in the development of the original
							quartz watch movements.
						</Typography>
						<Typography paragraph>
							Although Rolex has made very few quartz models for
							its Oyster line, the company's engineers were
							instrumental in design and implementation of the
							technology during the late 1960s and early 1970s. In
							1968, Rolex collaborated with a consortium of 16
							Swiss watch manufacturers to develop the Beta 21
							quartz movement used in their Rolex Quartz Date 5100
							alongside other manufactures including the Omega
							Electroquartz watches.[31] Within about five years
							of research, design, and development, Rolex created
							the "clean-slate" 5035/5055 movement that would
							eventually power the Rolex 'Oysterquartz.
						</Typography>
						<Typography paragraph>
							Material-wise, Rolex first used its "Cerachrom"
							ceramic bezel on the GMT-Master II in 2005, and has
							since then implemented ceramic bezel inserts across
							the range of professional sports watches. They are
							available on the Submariner, Sea Dweller, Deepsea,
							GMT Master II and Daytona models. In contrast to the
							aluminum bezel which it replaced, the ceramic bezel
							color does not wear out from exposure to UV-light
							and is very scratch resistant
						</Typography>
						<Typography>
							Rolex produced specific models suitable for the
							extremes of deep-sea diving, caving, mountain
							climbing, polar exploration, and aviation. Early
							professional models included the Rolex Submariner
							(1953) and the Rolex Sea Dweller (1967). The latter
							watch has a helium release valve, co-invented with
							Swiss watchmaker Doxa, to release helium gas
							build-up during decompression.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
			<Card className='bg-white w-[100%] shadow-2xl mt-10 border-2 border-gray-300'>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Rolex New Designs'
					subheader='June 16, 2022'
				/>
				<img
					src='https://tse4.mm.bing.net/th?id=OIP._-Xv-t1X42NG1nMItRukbAHaHa&pid=Api&P=0&w=153&h=153'
					alt='rolex image'
					className='w-full h-72'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun
						meal to cook together with your guests. Add 1 cup of
						frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography className='underline' paragraph>
							Discription
						</Typography>
						<Typography paragraph>
							Rolex mostly produced mechanical watches, but it has
							also participated in the development of the original
							quartz watch movements.
						</Typography>
						<Typography paragraph>
							Although Rolex has made very few quartz models for
							its Oyster line, the company's engineers were
							instrumental in design and implementation of the
							technology during the late 1960s and early 1970s. In
							1968, Rolex collaborated with a consortium of 16
							Swiss watch manufacturers to develop the Beta 21
							quartz movement used in their Rolex Quartz Date 5100
							alongside other manufactures including the Omega
							Electroquartz watches.[31] Within about five years
							of research, design, and development, Rolex created
							the "clean-slate" 5035/5055 movement that would
							eventually power the Rolex 'Oysterquartz.
						</Typography>
						<Typography paragraph>
							Material-wise, Rolex first used its "Cerachrom"
							ceramic bezel on the GMT-Master II in 2005, and has
							since then implemented ceramic bezel inserts across
							the range of professional sports watches. They are
							available on the Submariner, Sea Dweller, Deepsea,
							GMT Master II and Daytona models. In contrast to the
							aluminum bezel which it replaced, the ceramic bezel
							color does not wear out from exposure to UV-light
							and is very scratch resistant
						</Typography>
						<Typography>
							Rolex produced specific models suitable for the
							extremes of deep-sea diving, caving, mountain
							climbing, polar exploration, and aviation. Early
							professional models included the Rolex Submariner
							(1953) and the Rolex Sea Dweller (1967). The latter
							watch has a helium release valve, co-invented with
							Swiss watchmaker Doxa, to release helium gas
							build-up during decompression.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
			<Card className='bg-white w-[100%] shadow-2xl mt-10 border-2 border-gray-300 '>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Rolex New Designs'
					subheader='June 16, 2022'
				/>
				<img
					src='https://tse3.mm.bing.net/th?id=OIP.oHne0Cn4o1Xw4sYjcchQTgHaHa&pid=Api&P=0&w=174&h=174'
					alt='rolex image'
					className='w-full h-72'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun
						meal to cook together with your guests. Add 1 cup of
						frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography className='underline' paragraph>
							Discription
						</Typography>
						<Typography paragraph>
							Rolex mostly produced mechanical watches, but it has
							also participated in the development of the original
							quartz watch movements.
						</Typography>
						<Typography paragraph>
							Although Rolex has made very few quartz models for
							its Oyster line, the company's engineers were
							instrumental in design and implementation of the
							technology during the late 1960s and early 1970s. In
							1968, Rolex collaborated with a consortium of 16
							Swiss watch manufacturers to develop the Beta 21
							quartz movement used in their Rolex Quartz Date 5100
							alongside other manufactures including the Omega
							Electroquartz watches.[31] Within about five years
							of research, design, and development, Rolex created
							the "clean-slate" 5035/5055 movement that would
							eventually power the Rolex 'Oysterquartz.
						</Typography>
						<Typography paragraph>
							Material-wise, Rolex first used its "Cerachrom"
							ceramic bezel on the GMT-Master II in 2005, and has
							since then implemented ceramic bezel inserts across
							the range of professional sports watches. They are
							available on the Submariner, Sea Dweller, Deepsea,
							GMT Master II and Daytona models. In contrast to the
							aluminum bezel which it replaced, the ceramic bezel
							color does not wear out from exposure to UV-light
							and is very scratch resistant
						</Typography>
						<Typography>
							Rolex produced specific models suitable for the
							extremes of deep-sea diving, caving, mountain
							climbing, polar exploration, and aviation. Early
							professional models included the Rolex Submariner
							(1953) and the Rolex Sea Dweller (1967). The latter
							watch has a helium release valve, co-invented with
							Swiss watchmaker Doxa, to release helium gas
							build-up during decompression.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
			<Card className='bg-white w-[100%] shadow-2xl mt-10 border-2 border-gray-300 '>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Rolex New Designs'
					subheader='June 16, 2022'
				/>
				<img
					src='https://tse1.mm.bing.net/th?id=OIP.NPaYwFm-3CmH5pmlrePO1gHaHa&pid=Api&P=0&w=164&h=164'
					alt='rolex image'
					className='w-full h-72'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun
						meal to cook together with your guests. Add 1 cup of
						frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography className='underline' paragraph>
							Discription
						</Typography>
						<Typography paragraph>
							Rolex mostly produced mechanical watches, but it has
							also participated in the development of the original
							quartz watch movements.
						</Typography>
						<Typography paragraph>
							Although Rolex has made very few quartz models for
							its Oyster line, the company's engineers were
							instrumental in design and implementation of the
							technology during the late 1960s and early 1970s. In
							1968, Rolex collaborated with a consortium of 16
							Swiss watch manufacturers to develop the Beta 21
							quartz movement used in their Rolex Quartz Date 5100
							alongside other manufactures including the Omega
							Electroquartz watches.[31] Within about five years
							of research, design, and development, Rolex created
							the "clean-slate" 5035/5055 movement that would
							eventually power the Rolex 'Oysterquartz.
						</Typography>
						<Typography paragraph>
							Material-wise, Rolex first used its "Cerachrom"
							ceramic bezel on the GMT-Master II in 2005, and has
							since then implemented ceramic bezel inserts across
							the range of professional sports watches. They are
							available on the Submariner, Sea Dweller, Deepsea,
							GMT Master II and Daytona models. In contrast to the
							aluminum bezel which it replaced, the ceramic bezel
							color does not wear out from exposure to UV-light
							and is very scratch resistant
						</Typography>
						<Typography>
							Rolex produced specific models suitable for the
							extremes of deep-sea diving, caving, mountain
							climbing, polar exploration, and aviation. Early
							professional models included the Rolex Submariner
							(1953) and the Rolex Sea Dweller (1967). The latter
							watch has a helium release valve, co-invented with
							Swiss watchmaker Doxa, to release helium gas
							build-up during decompression.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>

			<Card className='bg-white w-[100%] shadow-2xl mt-10 border-2 border-gray-300 '>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Rolex New Designs'
					subheader='June 16, 2022'
				/>
				<img
					src='https://tse1.mm.bing.net/th?id=OIP.9iyC-aHjrN7Oa-Y-HFfz9QHaHa&pid=Api&P=0&w=156&h=156'
					alt='rolex image'
					className='w-full h-72'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun
						meal to cook together with your guests. Add 1 cup of
						frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography className='underline' paragraph>
							Discription
						</Typography>
						<Typography paragraph>
							Rolex mostly produced mechanical watches, but it has
							also participated in the development of the original
							quartz watch movements.
						</Typography>
						<Typography paragraph>
							Although Rolex has made very few quartz models for
							its Oyster line, the company's engineers were
							instrumental in design and implementation of the
							technology during the late 1960s and early 1970s. In
							1968, Rolex collaborated with a consortium of 16
							Swiss watch manufacturers to develop the Beta 21
							quartz movement used in their Rolex Quartz Date 5100
							alongside other manufactures including the Omega
							Electroquartz watches.[31] Within about five years
							of research, design, and development, Rolex created
							the "clean-slate" 5035/5055 movement that would
							eventually power the Rolex 'Oysterquartz.
						</Typography>
						<Typography paragraph>
							Material-wise, Rolex first used its "Cerachrom"
							ceramic bezel on the GMT-Master II in 2005, and has
							since then implemented ceramic bezel inserts across
							the range of professional sports watches. They are
							available on the Submariner, Sea Dweller, Deepsea,
							GMT Master II and Daytona models. In contrast to the
							aluminum bezel which it replaced, the ceramic bezel
							color does not wear out from exposure to UV-light
							and is very scratch resistant
						</Typography>
						<Typography>
							Rolex produced specific models suitable for the
							extremes of deep-sea diving, caving, mountain
							climbing, polar exploration, and aviation. Early
							professional models included the Rolex Submariner
							(1953) and the Rolex Sea Dweller (1967). The latter
							watch has a helium release valve, co-invented with
							Swiss watchmaker Doxa, to release helium gas
							build-up during decompression.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
			<Card className='bg-white w-[100%] shadow-2xl mt-10 border-2 border-gray-300 '>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Rolex New Designs'
					subheader='June 16, 2022'
				/>
				<img
					src='https://tse4.mm.bing.net/th?id=OIP.2zr_6skM_Xtr0gMGps-7EgHaFI&pid=Api&P=0&w=221&h=153'
					alt='rolex image'
					className='w-full h-72'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun
						meal to cook together with your guests. Add 1 cup of
						frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography className='underline' paragraph>
							Discription
						</Typography>
						<Typography paragraph>
							Rolex mostly produced mechanical watches, but it has
							also participated in the development of the original
							quartz watch movements.
						</Typography>
						<Typography paragraph>
							Although Rolex has made very few quartz models for
							its Oyster line, the company's engineers were
							instrumental in design and implementation of the
							technology during the late 1960s and early 1970s. In
							1968, Rolex collaborated with a consortium of 16
							Swiss watch manufacturers to develop the Beta 21
							quartz movement used in their Rolex Quartz Date 5100
							alongside other manufactures including the Omega
							Electroquartz watches.[31] Within about five years
							of research, design, and development, Rolex created
							the "clean-slate" 5035/5055 movement that would
							eventually power the Rolex 'Oysterquartz.
						</Typography>
						<Typography paragraph>
							Material-wise, Rolex first used its "Cerachrom"
							ceramic bezel on the GMT-Master II in 2005, and has
							since then implemented ceramic bezel inserts across
							the range of professional sports watches. They are
							available on the Submariner, Sea Dweller, Deepsea,
							GMT Master II and Daytona models. In contrast to the
							aluminum bezel which it replaced, the ceramic bezel
							color does not wear out from exposure to UV-light
							and is very scratch resistant
						</Typography>
						<Typography>
							Rolex produced specific models suitable for the
							extremes of deep-sea diving, caving, mountain
							climbing, polar exploration, and aviation. Early
							professional models included the Rolex Submariner
							(1953) and the Rolex Sea Dweller (1967). The latter
							watch has a helium release valve, co-invented with
							Swiss watchmaker Doxa, to release helium gas
							build-up during decompression.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
			<Card className='bg-white w-[100%]shadow-2xl mt-10 border-2 border-gray-300 '>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title='Rolex New Designs'
					subheader='June 16, 2022'
				/>
				<img
					src='https://tse4.mm.bing.net/th?id=OIP.6rN8xRG-A-hrGAeT9LXPHQHaHa&pid=Api&P=0&w=162&h=162'
					alt='rolex image'
					className='w-full h-72'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun
						meal to cook together with your guests. Add 1 cup of
						frozen peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<FavoriteIcon />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
					<ExpandMore
						expand={expanded}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label='show more'
					>
						<ExpandMoreIcon />
					</ExpandMore>
				</CardActions>
				<Collapse in={expanded} timeout='auto' unmountOnExit>
					<CardContent>
						<Typography className='underline' paragraph>
							Discription
						</Typography>
						<Typography paragraph>
							Rolex mostly produced mechanical watches, but it has
							also participated in the development of the original
							quartz watch movements.
						</Typography>
						<Typography paragraph>
							Although Rolex has made very few quartz models for
							its Oyster line, the company's engineers were
							instrumental in design and implementation of the
							technology during the late 1960s and early 1970s. In
							1968, Rolex collaborated with a consortium of 16
							Swiss watch manufacturers to develop the Beta 21
							quartz movement used in their Rolex Quartz Date 5100
							alongside other manufactures including the Omega
							Electroquartz watches.[31] Within about five years
							of research, design, and development, Rolex created
							the "clean-slate" 5035/5055 movement that would
							eventually power the Rolex 'Oysterquartz.
						</Typography>
						<Typography paragraph>
							Material-wise, Rolex first used its "Cerachrom"
							ceramic bezel on the GMT-Master II in 2005, and has
							since then implemented ceramic bezel inserts across
							the range of professional sports watches. They are
							available on the Submariner, Sea Dweller, Deepsea,
							GMT Master II and Daytona models. In contrast to the
							aluminum bezel which it replaced, the ceramic bezel
							color does not wear out from exposure to UV-light
							and is very scratch resistant
						</Typography>
						<Typography>
							Rolex produced specific models suitable for the
							extremes of deep-sea diving, caving, mountain
							climbing, polar exploration, and aviation. Early
							professional models included the Rolex Submariner
							(1953) and the Rolex Sea Dweller (1967). The latter
							watch has a helium release valve, co-invented with
							Swiss watchmaker Doxa, to release helium gas
							build-up during decompression.
						</Typography>
					</CardContent>
				</Collapse>
			</Card>
		</div>
	);
}
