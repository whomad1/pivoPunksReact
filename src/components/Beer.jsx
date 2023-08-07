import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Beer({ name }) {
	const [beer, setBeer] = useState(name);
	useEffect(() => {
		setBeer(beer);
	}, []);
	return (
		<Box display="flex" flexDirection="column">
			<Typography textAlign="center">{!beer ? "Loading..." : beer}</Typography>
		</Box>
	);
}
