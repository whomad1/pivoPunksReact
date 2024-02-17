import DetailedBeer from "../components/DetailedBeer";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function DetailedBeerPage() {
  return (
    <Box minWidth="439px">
      <Navbar />
      <DetailedBeer />
    </Box>
  );
}
