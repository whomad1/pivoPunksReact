import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { themeSettings } from "./theme";
import MainPage from "./scenes/MainPage";
import DetailedBeerPage from "./scenes/DetailedBeerPage";
function App() {
  const theme = createTheme(themeSettings);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route path="*" element={<MainPage />} />
          <Route exact path="/:id" element={<DetailedBeerPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
