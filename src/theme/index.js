import { createMuiTheme } from "@material-ui/core/styles";
// Fonts
import DosisLight from "../assets/fonts/dosis/Dosis-Light.ttf";
import DosisBook from "../assets/fonts/dosis/Dosis-Book.ttf";
import DosisMedium from "../assets/fonts/dosis/Dosis-Medium.ttf";
import DosisSemibold from "../assets/fonts/dosis/Dosis-Semibold.ttf";
import DosisBold from "../assets/fonts/dosis/Dosis-Bold.ttf";

const dosisLight = {
  fontFamily: "Dosis",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `local('Dosis'), local('Dosis-Light'), url(${DosisLight}) format('truetype')`, // format must be "truetype" not "ttf"
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const dosisBook = {
  fontFamily: "Dosis",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `local('Dosis'), local('Dosis-Book'), url(${DosisBook}) format('truetype')`, // format must be "truetype" not "ttf"
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const dosisMedium = {
  fontFamily: "Dosis",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `local('Dosis'), local('Dosis-Medium'), url(${DosisMedium}) format('truetype')`, // format must be "truetype" not "ttf"
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const dosisSemibold = {
  fontFamily: "Dosis",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 600,
  src: `local('Dosis'), local('Dosis-Semibold'), url(${DosisSemibold}) format('truetype')`, // format must be "truetype" not "ttf"
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const dosisBold = {
  fontFamily: "Dosis",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `local('Dosis'), local('Dosis-Bold'), url(${DosisBold}) format('truetype')`, // format must be "truetype" not "ttf"
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Dosis",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    fontSize: 16,
    body1: {
      letterSpacing: 1,
    },
  },
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
        "@font-face": [
          dosisLight,
          dosisBook,
          dosisMedium,
          dosisSemibold,
          dosisBold,
        ],
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
