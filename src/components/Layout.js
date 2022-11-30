import React, { useState } from "react";
import { Helmet } from "react-helmet";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Container, Typography, Box } from "@mui/material/";
import Header from "./Header";
import Footer from "../components/Footer";
/* import Store from "../components/Store"; */
import CookieConsent from "react-cookie-consent";
import Link from "./Link";
import Background from "../components/Background";
import { motion } from "framer-motion";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

export default function Layout({ location, children }) {
  const [isSupport] = useState(location?.pathname === "/support");
  const [isCampaign] = useState(location?.pathname === "/nya-nemas");

  return (
    <>
      <Helmet>
        <title>Nemas - Videosamtal med rådgivare!</title>
        <meta
          name="p:domain_verify"
          content="5b9d4fd1056544ce6ffd357623147ef0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght,YTAS@8..144,100,400,750;8..144,100,500,750;8..144,100,700,750;8..144,130,900,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />     
      <GlobalStyles
        styles={{
          a: {
            color: "#001814",
          },
        }}
      />
      <Background />
      <Container maxWidth="lg">
        <Header isSupport={isSupport} />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            mass: 0.35,
            stiffness: 75,
            duration: 0.1,
          }}
        >
          {children}
        </motion.main>
        <CookieConsent
          flipButtons
          location="bottom"
          buttonText="Jag accepterar"
          enableDeclineButton
          declineButtonText="Jag accepterar inte"
          cookieName="gatsby-gdpr-google-analytics"
          style={{
            background: "#001814",
            alignItems: "center",
            fontFamily:
              "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'",
          }}
          contentStyle={{
            margin: "32px 32px 24px 32px",
            fontSize: "16px",
            color: "#fefefe",
          }}
          buttonStyle={{
            background: "#00DCA0",
            borderRadius: "32px",
            padding: "16px 24px",
            fontSize: "16px",
            fontWeight: "500",
            margin: "16px 0 16px 16px",
          }}
          declineButtonStyle={{
            background: "transparent",
            color: "#00DCA0",
            border: "2px solid #00DCA0",
            borderRadius: "32px",
            padding: "16px 24px",
            fontSize: "16px",
            fontWeight: "500",
            margin: "16px",
          }}
        >
          <Typography variant="body" gutterBottom sx={{ color: "#fefefe" }}>
            Den här sidan kräver cookies för att kunna visas ordentligt. Genom
            att fortsätta surfa godkänner du vårt användande av cookies. För mer
            information om vilken data som sparas med våra cookies, se sidan för{" "}
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
          </Typography>
        </CookieConsent>
      </Container>
      {isCampaign ? <Box /> : <Box />};
      <Footer />
      </ThemeProvider>
    </>
  );
}
