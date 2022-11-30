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

export default function Usp() {
  return (
    <>
      <Box
        sx={{
          my: 8,
          py: [8, 16],
          px: [2, 4, 8],
          backgroundColor: "#fefefe",
          color: "#001814",
          textAlign: "center",
          borderRadius: "0 4px 4px 0",
          borderLeft: ["4px solid #00dca0", "none"],
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 4, md: 12 }}
        >
          <Box>
            <Typography variant="overline" gutterBottom sx={{ width: "100%" }}>
              Våra kategorier
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                fontWeight: "900",
                fontStyle: "italic",
                textTransform: "uppercase",
                padding: ["0 16px 32px", "0 196px 64px"],
              }}
            >
              Vi planerar för fler spännande kategorier, tipsa oss gärna!
            </Typography>
          </Box>
        </Grid>
        <StaticQuery
          query={graphql`
            {
              allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/markdown/usp/" } }
              ) {
                edges {
                  node {
                    id
                    frontmatter {
                      imageAlt
                      title
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
            <Grid
              container
              justifyContent="space-between"
              spacing={{ xs: 2, md: 4 }}
              columns={{ xs: 4, sm: 4, md: 12 }}
            >
              {data.allMarkdownRemark.edges.map(({ node }, i) => (
                <Grid item xs={4} sm={2} md={4}>
                  <Card>
                    <Typography
                      variant="h6"
                      component="h6"
                      sx={{
                        fontWeight: "900",
                        fontStyle: "italic",
                        textTransform: "uppercase",
                      }}
                    >
                      {node.frontmatter.title}
                    </Typography>
                    <CardMedia sx={{ mt: 2, mb: 1 }}>
                      <GatsbyImage
                        image={
                          node.frontmatter.imageSrc.childImageSharp
                            .gatsbyImageData
                        }
                        alt={node.frontmatter.imageAlt}
                        imgStyle={{ borderRadius: "8px" }}
                      />
                    </CardMedia>
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {node.frontmatter.imageAlt}
                      </Typography>
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
