import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import theme from "./Theme/theme.jsx";
import { ContextProvider } from "./Context/Context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <CssBaseline />
        <App />
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
