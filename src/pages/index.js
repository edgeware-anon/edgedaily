import * as React from "react";
import Header from "../components/header";
import { Link } from "gatsby";
 import { graphql } from 'gatsby';
import WorkingGroups from "../components/workingGroups";



// markup
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !edge.node.frontmatter.tags.includes('wg'))
    .map(edge => (
        <article key={edge.node.id}>
          <h1><Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link></h1>
        </article>
    ))
  const Wgs = edges
    .filter(edge => edge.node.frontmatter.tags.includes('wg'));

  return (
    <main>
      <title>Home Page</title>
      <Header/>
      <WorkingGroups data={Wgs}/>
      <section>
        <h4>Posts:</h4>
        {Posts}
      </section>
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
            tags
          }
        }
      }
    }
  }
`

export default IndexPage
