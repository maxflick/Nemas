import * as React from "react";
import Layout from "../components/layout";
import { Typography, Box, Button } from "@mui/material/";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "../components/Link";

export default function FourZeroFour(props) {
  return (
    <Layout location={props.location}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          my: 4,
          padding: [4, 8],
          backgroundColor: "#fefefe",
          borderRadius: "0 4px 4px 0",
          borderLeft: ["none", "4px solid #00dca0"],
          maxWidth: "400px",
        }}
      >
        <Typography sx={{ color: "#00DCA0" }} variant="overline" gutterBottom>
          404 — Error
        </Typography>
        <Typography variant="h1" component="h1">
          Vi hittar tyvärr inte sidan du letar efter
        </Typography>
        <Typography sx={{ my: 4 }} variant="body" gutterBottom>
          Klicka på knappen för att ta dig tillbaka till startsidan.
        </Typography>
        <Button
          component={Link}
          to="/"
          color="secondary"
          variant="contained"
          disableElevation
          startIcon={<ArrowBackIcon />}
        >
          Tillbaka
        </Button>
      </Box>
    </Layout>
  );
}
