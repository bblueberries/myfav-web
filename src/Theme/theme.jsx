import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const theme = createTheme({
  // direction: "ltr",
  palette: {
    primary: {
      main: grey[300],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          p: "0",
          m: "0",
        },
      },
    },
  },
});

export default theme;
