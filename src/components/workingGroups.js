import * as React from "react"
import { Link } from "gatsby"

const WorkingGroups = (data) => {
    const length = data.data.length;
    const Groups = data.data
        .filter(edge => edge.node.frontmatter.tags.includes('wg'))
        .map((edge, idx) => (
            <span key={edge.node.id}><Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link>{idx !== length-1 ? ", " : "."}</span>
        ));

    return (
      <section>
          <h4>Working Groups:</h4>
          {Groups}
      </section>
    )
  };

export default WorkingGroups;
