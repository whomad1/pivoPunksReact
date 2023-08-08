import DetailedBeer from "../components/DetailedBeer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
function getIdFromHref() {
	const url = window.location.href;
	let id = url.split("/"); // id is an array of 4
	id = id[id.length - 1].slice(1);
	return id;
}
export default function DetailedBeerPage() {
	const id = getIdFromHref();

	return (
		<Box minWidth="439px">
			<Navbar />
			<DetailedBeer id={id} />
		</Box>
	);
}
