import React, { useEffect, useState } from "react";
import Beer from "./Beer";
import { Box, Typography, Button } from "@mui/material";

export default function Menu() {
	const [beer, setBeer] = useState();

	
	useEffect(() => {
		fetch("https://api.punkapi.com/v2/beers/random").then((res) =>
			res.json().then((data) => setBeer(data))
		);
	}, []);
	return (
		<Box
			display="flex"
			justifyContent="start"
			alignItems="center"
			minHeight="100vh"
			flexDirection="column"
			sx={{ mt: 2 }}>
			<Typography variant="h1">Menu</Typography>
			{!beer ? "loading..." : <Beer name={beer[0]["name"]} />}
		</Box>
	);
}
