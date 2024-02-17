import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailedBeer() {
  const [beer, setBeer] = useState(null);
  const { id } = useParams();

  const getBeer = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const data = await res.json();
    if (data) setBeer(data);
  };

  useEffect(() => {
    getBeer();
  }, [id]);
  if (!beer) return <div>Loading</div>;
  if (!id) return <div>Loading</div>;
  const { name, tagline } = beer[0];

  return (
    <Box display="flex" flexDirection="column" textAlign="center">
      <Typography variant="h1" textAlign="center" component="div">
        {!name ? "Loading name..." : name}
      </Typography>
      <Typography>Sorry I'm too lazy to show you more! </Typography>
      <Typography>
        But stay tuned I might feel LIKE THAT to come back and do all the
        remaining info...{tagline}
      </Typography>
    </Box>
  );
}
