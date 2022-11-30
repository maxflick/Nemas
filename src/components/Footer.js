import * as React from "react";
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
} from "@mui/material/";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Logo from "./Logo";
import Link from "../components/Link";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          mt: 8,
          pt: 8,
          pb: 16,
          backgroundColor: "#001814",
          color: "#fefefe",
          lineHeight: 1,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={3}>
              <List>
                <ListItem>
                  <Typography variant="overline">
                    Nemas AB &#169; {new Date().getFullYear()}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Link to="/">
                    <Logo white />
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <List>
                <ListItem>
                  <Typography variant="overline">Information</Typography>
                </ListItem>
                <ListItem
                  sx={{ color: "#fefefe", fontSize: "1rem", fontWeight: "400" }}
                >
                  559248-8778
                </ListItem>
                <ListItem
                  sx={{ color: "#fefefe", fontSize: "1rem", fontWeight: "400" }}
                >
                  Sysslomansgatan 24
                </ListItem>
                <ListItem
                  sx={{ color: "#fefefe", fontSize: "1rem", fontWeight: "400" }}
                >
                  112 41, Stockholm
                </ListItem>
                <ListItem
                  sx={{ color: "#fefefe", fontSize: "1rem", fontWeight: "400" }}
                >
                  hej@nemasapp.com
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <List>
                <ListItem>
                  <Typography variant="overline">
                    Användarinformation
                  </Typography>
                </ListItem>
                <ListItem>
                  <Link
                    sx={{
                      color: "#fefefe",
                      fontSize: "1rem",
                      fontWeight: "400",
                      textDecorationColor: "#00DCA0",
                    }}
                    to="/support"
                  >
                    Vanliga frågor och svar
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    sx={{
                      color: "#fefefe",
                      fontSize: "1rem",
                      fontWeight: "400",
                      textDecorationColor: "#00DCA0",
                    }}
                    to="/nyheter-innehall"
                  >
                    Nyheter &amp; Innehåll
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    sx={{
                      color: "#fefefe",
                      fontSize: "1rem",
                      fontWeight: "400",
                      textDecorationColor: "#00DCA0",
                    }}
                    to="/policy"
                  >
                    Integritetspolicy och cookies
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    sx={{
                      color: "#fefefe",
                      fontSize: "1rem",
                      fontWeight: "400",
                      textDecorationColor: "#00DCA0",
                    }}
                    to="/terms"
                  >
                    Allmänna villkor
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    sx={{
                      color: "#fefefe",
                      fontSize: "1rem",
                      fontWeight: "400",
                      textDecorationColor: "#00DCA0",
                    }}
                    to="/support-radgivare"
                  >
                    Support för Rådgivare
                  </Link>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4} sm={4} md={3}>
              <List>
                <ListItem>
                  <Button
                    component={Link}
                    to="https://www.instagram.com/nemasapp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<InstagramIcon />}
                  >
                    Instagram
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    component={Link}
                    to="https://www.facebook.com/nemasapp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<FacebookIcon />}
                  >
                    Facebook
                  </Button>
                </ListItem>
                <ListItem>
                  <Button
                    component={Link}
                    to="https://www.linkedin.com/company/nemasapp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                    variant="outlined"
                    disableElevation
                    startIcon={<LinkedInIcon />}
                  >
                    LinkedIn
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
