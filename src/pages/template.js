import * as React from "react";
import { graphql } from "gatsby";
import { Box, Typography, Button } from "@mui/material/";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import VideoEmbed from "../components/VideoEmbed";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "../components/Link";

export default function template({ data }, props) {
  const { html } = data.markdownRemark;
  const {
    author,
    title,
    date,
    imageSrc,
    imageAlt,
    videoSrc,
    videoSrcTwo,
    videoAlt,
  } = data.markdownRemark.frontmatter;
  return (
    <>
      <Layout location={props.location}>
        <Box
          sx={{
            my: 4,
            py: [4, 8],
            px: [4, 24],
            backgroundColor: "#fefefe",
            borderRadius: "0 4px 4px 0",
            borderLeft: "8px solid #00dca0",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="overline">{date}</Typography>
            <Typography variant="overline">Postat av {author}</Typography>
          </Box>
          <Typography variant="h1" component="h1" sx={{ mt: 4 }} gutterBottom>
            {title}
          </Typography>
          <Box sx={{ py: 6 }}>
            <GatsbyImage
              image={imageSrc.childImageSharp.gatsbyImageData}
              alt={imageAlt}
              imgStyle={{ borderRadius: "8px" }}
              objectFit="contain"
            />
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {videoSrc && (
            <Box sx={{ aspectRatio: "16 /9", mt: 8 }}>
              <VideoEmbed videoSrcURL={videoSrc} videoTitle={videoAlt} />
            </Box>
          )}
          {videoSrcTwo && (
            <Box sx={{ aspectRatio: "16 /9", mt: 8 }}>
              <VideoEmbed videoSrcURL={videoSrcTwo} videoTitle={videoAlt} />
            </Box>
          )}
          <Box sx={{ mt: 8, textAlign: "center" }}>
            <Button
              component={Link}
              to="/nyheter-innehall"
              color="secondary"
              variant="outlined"
              disableElevation
              startIcon={<ArrowBackIcon />}
            >
              Tillbaka till Nyheter och innehåll
            </Button>
          </Box>
        </Box>
      </Layout>
    </>
  );
}

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        date
        tags
        slug
        title
        videoSrc
        videoSrcTwo
        videoAlt
        imageAlt
        imageSrc {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
