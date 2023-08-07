import DetailedBeer from "../components/DetailedBeer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

export default function DetailedBeerPage() {
	const url = window.location.href;
	console.log(url);
	console.log(url.split("/")[-1]);
	return (
		<>
			<Navbar />
			<DetailedBeer id={1} />
			{/* get the string after last slash*/}
		</>
	);
}
