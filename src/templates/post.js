import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import WorkingGroups from "../components/workingGroups"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, allMarkdownRemark } = data // data.markdownRemark holds your post data
  const Wgs = allMarkdownRemark.edges
  .filter(edge => edge.node.frontmatter.tags.includes('wg'));

  const { frontmatter, html } = markdownRemark
  return (<>
    <Header/>
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title} | {frontmatter.date}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
    <footer>
      { frontmatter.tags.includes('wg') && <WorkingGroups data={Wgs}/>}
    </footer>
    </>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MM.DD.YY")
        slug
        title
        tags
      }
    },
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 120)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            tags
          }
        }
      }
    }
  }
`