import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#bdbdbd",
    },
    background: {
      default: "rgb(21, 32, 43)",
    },
  },
  overrides: {
    MuiCheckbox: {
      root: {
        color: "#bdbdbd",
      },
    },
  },
});
