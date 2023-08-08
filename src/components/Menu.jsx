import React, { useEffect, useState } from "react";
import Beer from "./Beer";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
export default function Menu() {
	const [beer, setBeer] = useState();

	const getBeer = async () => {
		const res = await fetch(
			"https://api.punkapi.com/v2/beers?page=1&per_page=10"
		);
		const data = await res.json();

		if (data) {
			console.log("data:", data);
			setBeer(data);
		} else console.log("data2:", beer);
	};

	useEffect(() => {
		getBeer();
	}, []);

	if (!beer) return null;

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="100vh"
			flexDirection="column"
			sx={{ m: 2 }}>
			<Typography variant="h1">Menu</Typography>

			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				minHeight="100vh">
				<Grid
					container
					spacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
					columns={{ xs: 4, sm: 8, md: 8, lg: 12 }}
					margin={{ xs: 2, sm: 4, md: 8, lg: 16 }}>
					{beer.map(({ id, name, tagline, image_url }) => (
						<Grid xs={4} sm={8} md={4} lg={6} key={id}>
							<Beer
								key={id}
								id={id}
								name={name}
								tagline={tagline}
								image_url={image_url}
							/>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
}
