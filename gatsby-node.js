const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query blogPosts {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/markdown/blog/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: "/nyheter-innehall/" + node.frontmatter.slug,
      component: path.resolve("./src/pages/template.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};
