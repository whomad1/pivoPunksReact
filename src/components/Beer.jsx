import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { themeSettings } from "../theme";
import { Link } from "react-router-dom";

export default function Beer({ id, name, tagline, image_url }) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      sx={{
        border: 3,
        borderColor: themeSettings.palette.secondary.main,
        borderRadius: 1,
        padding: 3,
      }}
    >
      <Box>
        {!image_url ? (
          "no image"
        ) : (
          <img
            width="auto"
            height="300vh"
            alt="beer"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
            src={`${image_url}`}
          />
        )}
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="h3" textAlign="center" component="div">
          {!name ? "NAME..." : name}
        </Typography>
        <Typography variant="h4" textAlign="center" component="div">
          {!tagline ? "TAGLINE..." : tagline}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Link to={`/${id}`}>
          <Button>Learn More</Button>
        </Link>
      </Box>
    </Box>
  );
}
