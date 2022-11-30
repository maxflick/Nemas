import * as React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import Layout from "../components/layout";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material/";
import ContentLight from "../components/ContentLight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import FormNewer from "../components/FormNewer";
import Cf7FormWrapper from "../components/Cf7FormWrapper";
import VideoEmbed from "../components/VideoEmbed";

/* const uspData = [
  "Skapa nya intäkter och använd din expertis på en ny marknad för digital rådgivning.",
  "Nå fler kunder lokalt och nationellt med digital räckvidd.",
  "Äg 100% av alla intäkter för sålda tjänster på Nemas-plattformen.",
  "Kunden får olika betalningsalternativ som t.ex Swish och kort och kan välja vad som passar dom bäst. ",
  "Effektivisera din försäljningsprocess, ditt offertarbete och din kundhantering med en ökad digital närvaro.",
  "Möt kunden tidigare i sin besluts- och köpresa och gudiea dom till rätt beslut.",
  "Fungerar på mobil, platta och dator!",
]; */

const listData = [
  "Leads och merförsäljning",
  "Stärk dina kundrelationer",
  "Smidigt offertarbete via videosamtal",
  "On-demand kund- och produktsupport när de behöver hjälp",
  "Köprådgivning",
];

export default function NewNemas(props) {
  return (
    <>
      <Layout location={props.location}>
        <Box
          sx={{
            backgroundColor: "#fefefe",
            my: 4,
            py: [4, 8],
            px: [4, 8],
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          <Typography variant="overline" sx={{ width: "100%" }}>
            Nemas 2.0
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mt: 2,
              color: "#001814",
              fontStyle: "italic",
              fontWeight: "900",
              textTransform: "uppercase",
            }}
            gutterBottom
          >
            VIDEO-PLATTFORMEN SOM FÖRENKLAR HANTERINGEN AV NYA OCH BEFINTLIGA
            KUNDER FÖR B2C-FÖRETAG
          </Typography>
        </Box>
        <Box
          sx={{
            my: [4, 8],
            display: "flex",
            flexDirection: ["column", "row"],
            gap: ["24px", "64px"],
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexBasis: "100%",
              gap: "64px",
            }}
          >
            <Box
              sx={{
                flexBasis: "100%",
                backgroundColor: "#fefefe",
                py: [1, 8],
                px: [4, 8],
                borderRadius: "4px",
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  mb: 2,
                  color: "#001814",
                  fontStyle: "italic",
                  fontWeight: "900",
                  textTransform: "uppercase",
                }}
              >
                Värdet med Nemas!
              </Typography>

              <Box sx={{ aspectRatio: "16 /9" }}>
                <VideoEmbed
                  videoSrcURL={"https://www.youtube.com/embed/MR1qLePfjtk"}
                  videoTitle={"videoAlt"}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              flexBasis: "100%",
              p: 4,
              backgroundColor: "#fefefe",
              borderRadius: "4px",
              height: "fit-content",
              flexShrink: "2",
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{
                color: "#001814",
                fontStyle: "italic",
                fontWeight: "900",
                textTransform: "uppercase",
              }}
            >
              BLI LANSERINGSKUND!
            </Typography>
            <Box sx={{ my: 2 }}>
              <Typography variant="body">
                Dom 150 första som registrerar sig får{" "}
                <b>en kostnadsfri månad utan bindningstid</b> med full
                funktionalitet. <br />
                <br />
                Vi söker 150st företag inom B2C som vill testa plattformen
                kostnadsfritt.
                <br />
                <br />
                Det enda vi vill ha av dig är chansen att ta in din feedback
                under tiden vi bygger plattformen.
              </Typography>
              <Button
                sx={{
                  mt: 2,
                  justifyContent: "space-between",
                  padding: "16px 24px",
                  width: "100%",
                }}
                onClick={() => scrollTo("#FormNew")}
                variant="contained"
                endIcon={<ArrowForwardIcon />}
              >
                Jag vill anmäla intresse!
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: [4, 8],
            backgroundColor: "#001814",
            borderRadius: "4px",
            display: "flex",
            flexDirection: ["column", "row"],
            gap: ["32px", "64px"],
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexBasis: "100%",
              gap: "8px",
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{
                color: "#00DCA0",
                fontStyle: "italic",
                fontWeight: "900",
                textTransform: "uppercase",
              }}
              gutterBottom
            >
              MERFÖRSÄLJNING OCH STÄRKTA KUNDRELATIONER, ON-DEMAND I MOBILEN,
              DATORN ELLER PADDAN, PÅ DINA VILLKOR DÄR DU ÄR FÖR STUNDEN.
            </Typography>

            <Typography type="body2" sx={{ color: "#fefefe" }}>
              Med ett par knapptryck är du ansluten till Nemas plattform, din
              egna kraftfulla profilsida med bokning-, betalning- och
              videofunktionalitet, dit du kan länka alla dina kunder!
            </Typography>
            <Button
              sx={{
                mt: 2,
                justifyContent: "space-between",
                padding: "16px 24px",
                width: ["100%", "Auto"],
              }}
              onClick={() => scrollTo("#FormNew")}
              variant="contained"
              endIcon={<ArrowForwardIcon />}
            >
              Jag vill anmäla mitt intresse!
            </Button>
          </Box>
          <Box sx={{ flexBasis: "100%", p: 0 }}>
            <List sx={{ p: 0 }}>
              {listData.map((listDataItem, index) => {
                return (
                  <ListItem sx={{ pt: 0, pb: 1 }}>
                    <ListItemIcon>
                      <CheckIcon
                        sx={{
                          width: "1.25rem",
                          height: "1.25rem",
                          marginTop: "0px",
                          marginRight: "8px",
                          color: "#00DCA0",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      key={index}
                      disableTypography
                      primary={
                        <Typography
                          variant="h5"
                          component="h5"
                          sx={{
                            color: "#fefefe",
                            fontStyle: "italic",
                            fontWeight: "900",
                            textTransform: "uppercase",
                          }}
                        >
                          {listDataItem}
                        </Typography>
                      }
                    />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
        <ContentLight />
        {/* <Box>
          <List
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
              flexWrap: "wrap",
              backgroundColor: "#001814",
              gap: ["16px", "24px"],
              justifyContent: ["start", "space-around"],
              py: [4, 8],
              px: [2, 4],
              borderRadius: "16px",
            }}
          >
            {uspData.map((uspDataItem, index) => {
              return (
                <ListItem
                  sx={{
                    padding: "0",
                    display: "flex",
                    flexDirection: ["row", "row"],
                    flexBasis: ["100%", "30%"],
                  }}
                >
                  <ListItemIcon>
                    <CheckIcon
                      sx={{ width: "2rem", color: "#00DCA0", mr: 1 }}
                    />
                  </ListItemIcon>
                  <Typography
                    variant="body"
                    sx={{
                      color: "#fefefe",
                      fontWeight: "600",
                    }}
                  >
                    {uspDataItem}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Box> */}

        <Box
          sx={{
            backgroundColor: "#fefefe",
            my: 8,
            py: [1, 8],
            px: [4, 8],
            borderRadius: "4px",
          }}
        >
          <Box sx={{ width: "100%", textAlign: "center", pt: [3, 0] }}>
            <Typography variant="overline" gutterBottom sx={{ width: "100%" }}>
              Nemas 2.0
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: "900",
                fontStyle: "italic",
                textTransform: "uppercase",
                padding: ["0", "0", "0 256px 40px"],
              }}
            >
              ANMÄL DIG SOM PILOTKUND OCH PROVA PLATTFORMEN KOSTNADSFRITT I EN
              MÅNAD
            </Typography>
          </Box>
          {/* <Typography
            variant="h2"
            component="h2"
            sx={{
              mt: 4,
              fontStyle: "italic",
              fontWeight: "900",
              textTransform: "uppercase",
              textAlign: "center",
            }}
            gutterBottom
          >
            ANMÄL DIG SOM PILOTKUND OCH PROVA PLATTFORMEN KOSTNADSFRITT I EN
            MÅNAD
          </Typography> */}

          <Cf7FormWrapper siteUrl="https://blog.nemasapp.com" formId="621">
            <FormNewer />
          </Cf7FormWrapper>
        </Box>
      </Layout>
    </>
  );
}
