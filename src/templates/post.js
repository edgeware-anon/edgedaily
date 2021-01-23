import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
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
    </>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MM.DD.YY")
        slug
        title
      }
    }
  }
`