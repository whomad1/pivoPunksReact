import React, { useEffect, useState } from "react";
import Beer from "./Beer";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
export default function Menu() {
	const [beer, setBeer] = useState();
	const [page, setPage] = useState(1);
	const handlePageChange = (event, value) => {
		setPage(value);
	};
	const getBeer = async () => {
		const res = await fetch(
			`https://api.punkapi.com/v2/beers?page=${page}&per_page=10`
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
	useEffect(() => {
		getBeer();
	}, [page]);
	if (!beer) return null;

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="100vh"
			flexDirection="column"
			sx={{ m: 2 }}>
			<Typography variant="h1">Beer Menu</Typography>
			<Box>
				<Stack spacing={2}>
					<Pagination count={15} page={page} onChange={handlePageChange} />
				</Stack>
			</Box>
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
					{!beer ? (
						<Skeleton xs={4} sm={8} md={4} lg={6} variant="rectangular" />
					) : (
						beer.map(({ id, name, tagline, image_url }) => (
							<Grid xs={4} sm={8} md={4} lg={6} key={id}>
								<Beer
									key={id}
									id={id}
									name={name}
									tagline={tagline}
									image_url={image_url}
								/>
							</Grid>
						))
					)}
				</Grid>
			</Box>
			<Box>
				<Stack spacing={2}>
					<Pagination count={15} page={page} onChange={handlePageChange} />
				</Stack>
			</Box>
		</Box>
	);
}
