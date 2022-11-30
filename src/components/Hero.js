import * as React from "react";
import { Box, Typography } from "@mui/material/";
import Masonry from "@mui/lab/Masonry";
import FormLight from "./FormLight";
import MockUp from "./MockUp";
import Cf7FormWrapper from "../components/Cf7FormWrapper";
import { StaticImage } from "gatsby-plugin-image";
import StarIcon from "@mui/icons-material/Star";

export function HeroImage() {
  return (
    <StaticImage
      placeholder="tracedSVG"
      src="../media/nemas.png"
      alt="Nemas i mobil"
    />
  );
}

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

export default function Hero() {
  return (
    <>
      <Box id="hero" sx={{ mt: 4, mb: 8 }}>
        {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12}}> */}
        <Masonry
          columns={[1, 2, 3]}
          spacing={[4, 2, 8]}
          sx={{
            margin: "0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ margin: "0", width: ["100%", "50%", "32%"] }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: ["24px 24px 32px 24px", "0"],
                borderRadius: ["4px", "0"],
                backgroundColor: ["#fefefe", "transparent"],
                borderLeft: ["4px solid #00dca0", "none"],
              }}
            >
              <Box>
                <Typography variant="overline" gutterBottom>
                  NEMAS DIGITALISERAR KUNDRESOR
                </Typography>
                <Typography variant="h1" component="h1" gutterBottom>
                  Matchas med rådgivare för dina hemmaprojekt
                </Typography>
                <Typography variant="h3" component="h3" gutterBottom>
                  Nemas öppnar nu för dig som vill prova vår nya
                  rådgivningstjänst via video och chatt.
                </Typography>
              </Box>
              {/* <Box
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
                    <Box
                      sx={{ mt: 1, display: "flex", justifyContent: "center" }}
                    >
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
                    <Box
                      sx={{ mt: 1, display: "flex", justifyContent: "center" }}
                    >
                      <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                      <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                      <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                      <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                      <StarIcon sx={{ color: "#FFC700", width: "16px" }} />
                    </Box>
                  </a>
                </Box>
              </Box> */}

              {/* <Box
                sx={{
                  mt: 4,
                  p: 2,
                  borderRadius: "16px",
                  backgroundColor: "#001814",
                }}
              >
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: "#00DCA0",
                    fontSize: "16px",
                    textTransform: "uppercase",
                    fontStyle: "italic",
                    fontWeight: "900",
                  }}
                >
                  Just nu kostar samtal med rådgivare 50 kr!
                </Typography>
                <Button
                  sx={{
                    mt: 2,
                    justifyContent: "space-between",
                    padding: "16px 24px",
                    color: "#fefefe",
                    border: "3px solid #fefefe",
                  }}
                  component={Link}
                  to="/kampanj-radgivning-50kr"
                  endIcon={<ArrowForwardIcon />}
                  color="secondary"
                  variant="contained"
                  disableElevation
                  fullWidth
                >
                  Jag vill veta mer!
                </Button>
              </Box> */}
            </Box>
          </Box>
          <Box
            sx={{
              margin: "0",
              my: [4, 0, 0],
              width: ["100%", "50%", "32%"],
            }}
          >
            <MockUp />
          </Box>
          <Box
            sx={{
              margin: "0",
              width: ["100%", "50%", "32%"],
              height: "max-content",
              backgroundColor: "#fefefe",
              borderRadius: "4px",
              padding: "16px 24px 24px",
            }}
          >
            <Cf7FormWrapper siteUrl="https://blog.nemasapp.com" formId="181">
              <FormLight />
            </Cf7FormWrapper>
          </Box>
        </Masonry>
        {/* </Grid> */}
      </Box>
    </>
  );
}
