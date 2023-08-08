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
import { themeSettings } from "../theme";
const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("xs")]: {
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
		[theme.breakpoints.up("xs")]: {
			width: "12ch",
			"&:focus": {
				width: "12ch",
			},
		},
	},
}));
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
export default function Navbar() {
	const randomId = getRandomInt(300);
	const navigate = useNavigate();
	return (
		<Box minWidth="400px">
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h2"
						component="div"
						sx={{
							display: {
								sm: "block",
								"&:hover": {
									color: themeSettings.palette.secondary.main,
									cursor: "pointer",
								},
							},
						}}
						onClick={() => {
							navigate("/");
						}}>
						PivoPunk
					</Typography>

					<IconButton
						size="large"
						aria-label="show random beer"
						color="inherit"
						onClick={() => {
							navigate(`/:${randomId}`);
							navigate(0);
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
