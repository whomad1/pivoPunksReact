import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

export default function Navbar() {
	const [beer, setBeer] = useState();
	const navigate = useNavigate();
	const getBeer = async () => {
		try {
			const response = await fetch("https://api.punkapi.com/v2/beers/random");
			if (response) {
				const beer = await response.json();
				return beer;
			} else {
				console.err("failed to fetch random beer");
				return [];
			}
		} catch (err) {
			console.err("can't get beer");
			return [];
		}
	};

	const handleClick = async () => {
		setBeer(await getBeer());
	};

	useEffect(() => {
		fetch("https://api.punkapi.com/v2/beers/random").then((res) =>
			res.json().then((data) => setBeer(data))
		);
	}, []);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h2"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
						PivoPunk
					</Typography>

					<IconButton
						size="large"
						aria-label="show random beer"
						color="inherit"
						onClick={() => {
							handleClick();
							navigate(`/:${beer[0]["id"]}`); // There is no need to fetch beer only for id, might use a randomizer instead
						}}>
						<SportsBarIcon />
					</IconButton>

					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search…"
							inputProps={{ "aria-label": "search" }}
						/>
					</Search>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
