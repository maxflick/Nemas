import * as React from "react";
import Layout from "../components/layout";
import { Box, Typography } from "@mui/material/";
import FormNew from "../components/FormNew";
import Cf7FormWrapper from "../components/Cf7FormWrapper";

export default function TestaNemas(props) {
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
          <Typography sx={{ color: "#00DCA0" }} variant="overline" gutterBottom>
            Anmäl intresse!
          </Typography>
          <Typography variant="h1" component="h1" gutterBottom>
            Vill du testa Nemas?
          </Typography>
          <Typography sx={{ mb: 2 }} variant="h3" component="h3" gutterBottom>
            Fyll i formuläret så kontaktar vi dig inom kort med mer information
            om hur du kan ansluta.
          </Typography>
          <Cf7FormWrapper siteUrl="https://blog.nemasapp.com" formId="114">
            <FormNew />
          </Cf7FormWrapper>
        </Box>
      </Layout>
    </>
  );
}
