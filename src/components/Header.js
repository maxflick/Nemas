import * as React from "react";
import { Box, Button } from "@mui/material/";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "./Link";
import Logo from "./Logo";

export default function Header({ isSupport }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 3,
        }}
      >
        <Link to="/">
          <Box sx={{ paddingTop: "8px" }}>
            <Logo />
          </Box>
        </Link>
        {isSupport ? (
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
        ) : (
          <Button
            component={Link}
            to="/support"
            color="secondary"
            variant="contained"
            disableElevation
            startIcon={<InfoOutlinedIcon />}
          >
            Support
          </Button>
        )}
      </Box>
    </>
  );
}
