import * as React from "react";
import Layout from "../components/layout";
import { Box, Typography } from "@mui/material/";
import StyledAccordion from "../components/Accordion";
import { dataUser as data } from "../data/AccordionUserData";

export default function Support(props, dataUser, dataAdvisor) {
  /*   const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }; */

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
            Vanliga frågor och svar för användare som söker hjälp och råd
          </Typography>
          <StyledAccordion data={data} />
        </Box>
      </Layout>
    </>
  );
}
