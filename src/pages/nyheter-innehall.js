import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material/";
import Layout from "../components/layout";
import Link from "../components/Link";

export default function markdown({ data }, props) {
  console.log(data);
  return (
    <>
      <Layout location={props.location}>
        <Box
          sx={{
            my: 4,
            py: [4, 8],
            px: [4, 8],
            backgroundColor: "#fefefe",
            borderRadius: "0 4px 4px 0",
            borderLeft: "8px solid #00dca0",
          }}
        >
          <Typography sx={{ color: "#00DCA0" }} variant="overline" gutterBottom>
            Nyheter
          </Typography>
          <Typography variant="h1" component="h1" gutterBottom>
            Nyheter och innehåll från Nemas!
          </Typography>
          <Typography sx={{ mb: 2 }} variant="h3" component="h2" gutterBottom>
            Tips och nyheter kring hemmafix och information kring rådgivning via
            videosamtal.
          </Typography>
          <Grid
            container
            justifyContent="flex-start"
            sx={{ py: 4 }}
            columns={{ xs: 4, sm: 4, md: 12 }}
            spacing={{ xs: 16, sm: 8, md: 4 }}
          >
            {data.allMarkdownRemark.nodes.map((project) => (
              <Grid
                item
                xs={4}
                sm={2}
                md={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Link
                  to={"/nyheter-innehall/" + project.frontmatter.slug}
                  key={data.id}
                  sx={{ height: "100%", textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      background: "#ffffff",
                      height: "100%",
                      border: ["none", "2px solid rgba(0,18,14,0.025)"],
                      borderRadius: ["0", "16px"],
                      padding: ["0", "16px 24px 24px"],
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography
                        variant="overline"
                        sx={{ color: "rgba(0, 18, 14, 0.5)" }}
                      >
                        {project.frontmatter.date}
                      </Typography>
                      <Typography
                        variant="overline"
                        sx={{ color: "rgba(0, 18, 14, 0.5)" }}
                      >
                        Postat av {project.frontmatter.author}{" "}
                      </Typography>
                    </Box>
                    <CardMedia sx={{ my: 2, borderRadius: "16px" }}>
                      <GatsbyImage
                        image={
                          project.frontmatter.imageSrc.childImageSharp
                            .gatsbyImageData
                        }
                        alt={project.frontmatter.imageAlt}
                        imgStyle={{ borderRadius: "8px" }}
                        objectFit="contain"
                      />
                    </CardMedia>
                    <CardContent>
                      <Link>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="h6"
                          sx={{ fontWeight: "600" }}
                        >
                          {project.frontmatter.title}
                        </Typography>
                      </Link>

                      {/*  <Divider>
                        <Typography
                          sx={{ color: "#00DCA0" }}
                          variant="overline"
                          gutterBottom
                        >
                          Kategorier
                        </Typography>
                      </Divider>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          flexDirection: "row",
                          gap: "12px",
                          margin: "12px 0",
                        }}
                      >
                        {project.frontmatter.tags.map((tag) => (
                          <Chip
                            key={tag + `tag`}
                            label={tag}
                            variant="outlined"
                            sx={{
                              fontSize: "12px",
                              fontWeight: "600",
                              fontStyle: "normal",
                              textTransform: "none",
                            }}
                          />
                        ))}
                      </Box>
                      <Divider /> */}
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Layout>
    </>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/markdown/blog/" } }
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        frontmatter {
          title
          date
          author
          tags
          slug
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
        id
      }
    }
  }
`;
