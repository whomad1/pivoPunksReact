import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function DetailedBeer(id) {
	const [beer, setBeer] = useState();

	useEffect(() => {
		console.log(id.id);
		fetch(`https://api.punkapi.com/v2/beers/${id.id}`).then((res) =>
			res.json().then((data) => {
				setBeer(data);
			})
		);
	}, []);
	return (
		<Box display="flex" flexDirection="column">
			<Typography textAlign="center">{!beer ? "Loading..." : beer}</Typography>
		</Box>
	);
}
