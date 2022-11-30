import * as React from "react";
import { Box, Typography } from "@mui/material/";
import { StaticImage } from "gatsby-plugin-image";
import StarIcon from "@mui/icons-material/Star";

export function AppStore() {
  return (
    <StaticImage
      placeholder="tracedSVG"
      height={48}
      src="../media/appStore.png"
      alt="Hämta Nemas i Appstore"
    />
  );
}

export function GooglePlay() {
  return (
    <StaticImage
      placeholder="tracedSVG"
      height={48}
      src="../media/googlePlay.png"
      alt="Ladda ned Nemas på Google Play"
    />
  );
}

export default function Store() {
  return (
    <>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          borderRadius: ["4px", "0"],
          backgroundColor: "#fefefe",
          borderLeft: ["4px solid #00dca0", "none"],
          alignItems: "center",
        }}
      >
        <Box
          sx={{ alignItems: "center", textAlign: "center", maxWidth: "375px" }}
        >
          <Typography variant="overline" gutterBottom>
            Nu lanseras Nemas
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontWeight: "900",
              fontStyle: "italic",
              textTransform: "uppercase",
            }}
          >
            Ladda ner appen på App Store eller Google Play!
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 2,
            display: "inline-flex",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ mr: 1 }}>
            <a
              href="https://apps.apple.com/se/app/nemas/id1565806585"
              target="_blank"
              rel="noreferrer"
            >
              <AppStore />
              <Box sx={{ mt: 1, display: "flex", justifyContent: "center" }}>
                <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
              </Box>
            </a>
          </Box>
          <Box>
            <a
              href="https://play.google.com/store/apps/details?id=com.nemas_native"
              target="_blank"
              rel="noreferrer"
            >
              <GooglePlay />
              <Box sx={{ mt: 1, display: "flex", justifyContent: "center" }}>
                <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
}
