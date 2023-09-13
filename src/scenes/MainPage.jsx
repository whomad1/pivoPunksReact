import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
export default function MainPage() {
	return (
		<Box minWidth="400px">
			<Navbar />
			<Menu />
			<Divider />
		</Box>
	);
}
