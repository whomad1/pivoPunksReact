import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Beer from "./Beer";

export default function DetailedBeer({ id }) {
	const [beer, setBeer] = useState(null);

	const getBeer = async () => {
		console.log(id);
		const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
		const data = await res.json();
		if (data) setBeer(data);
		else console.log("data:", data);
	};

	useEffect(() => {
		getBeer();
	}, []);

	if (!beer) return null;
	console.log(beer[0]);
	const { name, tagline } = beer[0];

	return (
		<Box display="flex" flexDirection="column">
			<Typography variant="h1" textAlign="center" component="div">
				{!name ? "Loading name..." : name}
			</Typography>
		</Box>
	);
}
