import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogStyle from "../styles/blog.module.css"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  console.log(data, "inside blog-post")
  return (
    <Layout>
      <div className={BlogStyle.page}>
        <h1 className={BlogStyle.naslov}>{post.frontmatter.title}</h1>
        <img
          className={BlogStyle.slika}
          src={post.frontmatter.image.publicURL}
          alt="Slika"
        />
        <div
          className={BlogStyle.tijelo}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          publicURL
        }
      }
    }
  }
`
