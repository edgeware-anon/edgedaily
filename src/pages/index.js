import * as React from "react";
import Header from "../components/header";
import { Link } from "gatsby";


// markup
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .map(edge => (
        <article key={edge.node.id}>
          <h1><Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link></h1>
        </article>
    ))

  return (
    <main>
      <title>Home Page</title>
      <Header/>
      <section>{Posts}</section> 
    </main>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 120)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`

export default IndexPage
