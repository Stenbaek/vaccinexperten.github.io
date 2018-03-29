import React, { Component } from 'react'

export default class PostPage extends Component {
  render() {
    const data = this.props.data.markdownRemark
    return (
      <div>
        <span>{data.frontmatter.date}</span>
        <h1>{data.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD/MM YYYY")
      }
    }
  }
`
