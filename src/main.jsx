import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";
import App from "./App";
import ScrollText from "./components/common/ScrollText";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
        <Suspense>
          <App />
          <ScrollText/>
        </Suspense>
  </ThemeProvider>
  // </React.StrictMode>
);
