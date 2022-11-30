import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box } from "@mui/material/";

export default function Content() {
  return (
    <>
      <Box
        sx={{
          my: 8,
        }}
      >
        <StaticQuery
          query={graphql`
            {
              allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/markdown/content/" } }
                sort: {frontmatter: {order: ASC}}
              ) {
                edges {
                  node {
                    id
                    html
                    frontmatter {
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
            <Box
              justifyContent="space-between"
              sx={{ display: "flex", flexDirection: "column", gap: "0px" }}
            >
              {data.allMarkdownRemark.edges.map(({ node }, i) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: node.frontmatter.imageLeft
                      ? ["column", "row"]
                      : ["column", "row-reverse"],
                    backgroundColor: node.frontmatter.imageLeft
                      ? "transparent"
                      : "#001814",
                    color: node.frontmatter.imageLeft ? "#001814" : "#fefefe",
                    alignItems: "center",
                    borderRadius: "32px",
                    gap: ["0px", "64px"],
                    mb: [4, 0],
                  }}
                >
                  <Box
                    sx={{
                      padding: node.frontmatter.imageLeft
                        ? ["16px", "96px 0 96px 96px"]
                        : ["16px", "96px 96px 96px 0"],
                      flexBasis: "100%",
                    }}
                  >
                    <GatsbyImage
                      image={
                        node.frontmatter.imageSrc.childImageSharp
                          .gatsbyImageData
                      }
                      alt={node.frontmatter.imageAlt}
                      imgStyle={{ borderRadius: "8px" }}
                    />
                  </Box>
                  <Box
                    sx={{
                      padding: node.frontmatter.imageLeft
                        ? ["16px", "0px 96px 0px 0px"]
                        : ["16px", "0px 0px 0px 96px"],
                      flexBasis: "100%",
                    }}
                    dangerouslySetInnerHTML={{ __html: node.html }}
                  />
                </Box>
              ))}
            </Box>
          )}
        />
      </Box>
    </>
  );
}
