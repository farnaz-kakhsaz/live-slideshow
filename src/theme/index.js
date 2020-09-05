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
    MuiButton: {
      root: {
        height: "56px",
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
