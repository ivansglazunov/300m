import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#FFE20C",
      light: "#3c4758" // для коллапса
    },
    secondary: {
      main: "#FFE20C" // желтый
    },
    background: {
      // paper: '#0b1421'
      paper: "#111f33" // черный
    },
    divider: "#c8c8c8",
    text: {
      primary: "#fff", // белый
      secondary: "#cdcdcd"
    },
    collapseContainer: {
      backgroundColor: "#3c4758"
    },
    red: "#DD2E34",
    yellow: "#FFE20C",
    shadow: {
      shadowCard: {
        boxShadow: "0 0 2px 0 #8c8c8c"
      },
      shadowBadge: {
        boxShadow: "0 0 1px 0 #DD2E34" // красный
      }
    },
    paddingForCard: {
      paddingTop: 20
    }
  }
});
