import * as React from "react"
import { Link } from "gatsby"

const WorkingGroups = (data) => {
    const Groups = data.data
        .filter(edge => edge.node.frontmatter.tags.includes('wg'))
        .map(edge => (
            <span key={edge.node.id}><Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link>, </span>
        ));

    return (
      <section>
          <h4>Working Groups:</h4>
          {Groups}
      </section>
    )
  };

  export default WorkingGroups;