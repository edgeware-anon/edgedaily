module.exports = {
  siteMetadata: {
    title: "edgedaily",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `markdown-pages`,
        path: `./src/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `markdown-pages`,
        path: `./src/workingGroups`,
      },
    },
  ],
};
