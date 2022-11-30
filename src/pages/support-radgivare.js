import * as React from "react";
import Layout from "../components/layout";
import { Box, Typography } from "@mui/material/";
import StyledAccordion from "../components/Accordion";
import { dataAdvisor as data } from "../data/AccordionAdvisorData";

export default function SupportAdvisor(props) {
  return (
    <>
      <Layout location={props.location}>
        <Box
          sx={{
            my: 4,
            padding: [4, 8],
            backgroundColor: "#fefefe",
            borderRadius: "0 4px 4px 0",
            borderLeft: "8px solid #00dca0",
          }}
        >
          <Typography variant="overline" gutterBottom>
            Support
          </Typography>
          <Typography variant="h2" component="h1" gutterBottom>
            Vanliga frågor och svar för Rådgivare som använder Nemas!
          </Typography>
          <StyledAccordion data={data} />
        </Box>
      </Layout>
    </>
  );
}
