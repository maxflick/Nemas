import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material/";
import CheckIcon from "@mui/icons-material/Check";

export default function Usp() {
  return (
    <>
      <Box
        sx={{
          my: 8,
          pt: [8, 16],
          pb: [2, 8],
          backgroundColor: "#fefefe",
          color: "#001814",
          borderRadius: "0 4px 4px 0",
          borderLeft: ["4px solid #00dca0", "none"],
        }}
      >
        <Box sx={{ width: "100%", textAlign: "center", pb: [4, 8] }}>
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
              padding: ["0 32px 32px", "0 32px 32px", "0 256px 40px"],
            }}
          >
            Du får alla dessa värden och mycket mer!
          </Typography>
        </Box>
        <StaticQuery
          query={graphql`
          {
            allMarkdownRemark(
              filter: {frontmatter: {type: {eq: "content"}}}
              sort: {frontmatter: {order: ASC}}
            ) {
              edges {
                node {
                  id
                  html
                  frontmatter {
                    order
                    title
                    imageAlt
                    imageSrc {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
              }
            }
          }
          `}
          render={(data) => (
            <Grid container spacing={{ xs: 2, sm: 8, md: 8 }} columns={{ xs: 1, sm: 6, md: 12 }} sx={{px: 4}}>
              {data.allMarkdownRemark.edges.map(({ node }, i) => (
                <Grid item xs={4} sm={3} md={4}>
                  <Card>
                    <CardMedia>
                      <GatsbyImage
                        image={
                          node.frontmatter.imageSrc.childImageSharp
                            .gatsbyImageData
                        }
                        alt={node.frontmatter.imageAlt}
                        imgStyle={{ borderRadius: "8px" }}
                      />
                    </CardMedia>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        my: 6,
                        minHeight: ["unset", "80px"],
                      }}
                    >
                      <CheckIcon
                        sx={{
                          width: "2rem",
                          height: "2rem",
                          marginTop: "0px",
                          marginRight: "8px",
                          color: "#00DCA0",
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h6"
                        sx={{
                          fontStyle: "italic",
                          fontWeight: "900",
                          textTransform: "uppercase",
                        }}
                      >
                        {node.frontmatter.title}
                      </Typography>
                    </Box>
                    <CardContent sx={{ p: 0 }}>
                      <Box dangerouslySetInnerHTML={{ __html: node.html }} />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        />
      </Box>
    </>
  );
}
