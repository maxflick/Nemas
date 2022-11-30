import * as React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import {
  Box,
  Grid,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material/";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CircleIcon from "@mui/icons-material/Circle";
import DemoVideo from "../media/video2.mp4";
import styled from "styled-components";

export function DemoVideos() {
  return (
    <StyledVideo nocontrols muted autoPlay>
      <source src={DemoVideo} type="video/mp4" />
    </StyledVideo>
  );
}

const StyledVideo = styled.video`
  width: 100%;
  max-height: 100%;
  border-radius: 24px;
`;

export default function Video() {
  return (
    <>
      <Box
        sx={{
          my: 8,
          py: [4, 16],
          px: [2, 4, 8],
          backgroundColor: "#fefefe",
          borderRadius: "4px",
          color: "#001814",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 8 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={4} md={6}>
            <CardMedia>
              <DemoVideos />
            </CardMedia>
          </Grid>
          <Grid item xs={4} sm={4} md={6}>
            <Typography variant="overline" gutterBottom>
              Demo
            </Typography>
            <Typography variant="h1" component="h1">
              Så fungerar Nemas
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon sx={{ width: "0.3rem" }} />
                </ListItemIcon>
                <ListItemText>
                  <strong>Du väljer vilken kategori</strong> ditt projekt eller
                  problem är inom och skapar en förfrågan med beskrivning och
                  bild."
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon sx={{ width: "0.3rem" }} />
                </ListItemIcon>
                <ListItemText>
                  <strong>Ärendet skickas ut till kunniga rådgivare</strong>{" "}
                  inom ämnet som besvarar dig med förslag på tider för samtal
                  tillsammans med pris för rådgivningen.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon sx={{ width: "0.3rem" }} />
                </ListItemIcon>
                <ListItemText>
                  <strong>Du väljer vilken dag och tid</strong> som passar dig
                  bäst och du blir smidigt påmind genom appen när det är dags.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CircleIcon sx={{ width: "0.3rem" }} />
                </ListItemIcon>
                <ListItemText>
                  <strong>Du och rådgivaren har er rådgivningssession</strong>{" "}
                  som du kan betygsätta efteråt.
                </ListItemText>
              </ListItem>
            </List>
            <Button
              sx={{
                mt: 2,
                justifyContent: "space-between",
                padding: "16px 24px",
                width: ["100%", "Auto"],
              }}
              onClick={() => scrollTo("#hero")}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Jag vill veta mer!
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
