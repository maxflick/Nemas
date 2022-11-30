import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const defaultTheme = createTheme();

let theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Roboto Flex",
      "Segoe UI",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "2.5rem",
      lineHeight: "1.1",
      letterSpacing: "-0.025rem",
      color: "#001814",
      fontWeight: "900",
      fontStyle: "italic",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "400",
      color: "#001814",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "400",
      color: "#001814",
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: "400",
      color: "#001814",
    },
    h5: {
      fontSize: "1.15rem",
      fontWeight: "400",
      color: "#001814",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "500",
      color: "#001814",
    },
    body: {
      fontSize: "1rem",
      fontWeight: "400",
      color: "#001814",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: "400",
      color: "#001814",
    },
    overline: {
      color: "#00DCA0",
      fontWeight: "700",
      textTransform: "uppercase",
      fontSize: "10px",
      letterSpacing: "0.025rem",
    },
  },
  palette: {
    primary: {
      main: "#00DCA0",
      contrastText: "#001814",
    },
    secondary: {
      main: "#001814",
      contrastText: "#fefefe",
    },
    error: {
      main: "#FF8989",
    },
    background: {
      default: "#fefefe",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#001814",
          textDecorationColor: "#001814",
          fontWeight: "500",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "#001814",
          backgroundColor: "#fefefe",
          boxShadow: "none",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          color: "#001814",
          backgroundColor: "#fefefe",
          boxShadow: "none",
          "&.MuiAccordion-root:before": {
            opacity: "1",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: 0,
        },
        content: {
          margin: "32px 0",
        },
        expandIconWrapper: {
          color: "#001814",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.down("md")]: {
            padding: "16px 24px",
          },
          [defaultTheme.breakpoints.up("md")]: {
            padding: "40px 64px;",
          },
          background: "#fafafa",
          lineHeight: "2",
          marginBottom: "40px",
          border: "1px solid #f0f0f0",
          borderRadius: "4px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "128px",
          padding: "8px 16px",
          boxShadow: "none",
          textTransform: "none",
          fontSize: "1rem",
          "&:hover": {
            color: "#fefefe",
            backgroundColor: "#001814",
            boxShadow: "none",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MyIconButton: {
      "& svg": {
        fontSize: "1rem",
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#001814",
          },
        },
        loadingIndicator: {
          color: "#00DCA0",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          alignItems: "start",
        },
        label: {
          fontSize: "14px",
          marginTop: "8px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "0px",
          backgroundColor: "transparent",
        },
        content: {
          paddding: "16px 0",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px 0",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "8px 0",
          alignItems: "start",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "16px",
          color: "#001814",
          marginTop: "4px",
        },
        "& svg": {
          fontSize: "1px !important",
          width: "0.3rem !important",
          height: "0.3rem !important",
        },
      },
    },
    MuiFocused: {
      styleOverrides: {
        root: {
          fontWeight: "700",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            fontWeight: "700",
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          verticalAlign: "baseline",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          color: "#001814",
          backgroundColor: "#00DCA0",
          "& .MuiAlert-icon": {
            color: "#001814",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
