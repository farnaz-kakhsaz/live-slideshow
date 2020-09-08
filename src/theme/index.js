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
    MuiCssBaseline: {
      "@global": {
        html: {
          // Disable text selection highlighting
          MozUserSelect: "none",
          KhtmlUserSelect: "none",
          WebkitUserSelect: "none",
          MsUserSelect: "none",
          userUelect: "none",
        },
      },
    },
    MuiCheckbox: {
      root: {
        color: "#bdbdbd",
      },
    },
    MuiButton: {
      root: {
        height: 56,
      },
    },
    // Change border-bottom of input (underline)
    MuiInput: {
      underline: {
        "&::before": {
          borderBottom: "1px solid #bdbdbd",
        },
      },
    },
    // Change borderColor of input (outlined) (also in focused mode)
    MuiOutlinedInput: {
      // root: {
      //   "&$focused $notchedOutline": {
      //     borderColor: "#bdbdbd",
      //   },
      // },
      // focused: {},
      notchedOutline: {
        borderColor: "#bdbdbd",
      },
    },
    // Change placeholder (text) color of input (outlined) (also in focused mode)
    MuiFormLabel: {
      root: {
        // "&$focused": {
        //   color: "#bdbdbd",
        // },
        color: "#bdbdbd",
      },
      // focused: {},
    },
  },
});
