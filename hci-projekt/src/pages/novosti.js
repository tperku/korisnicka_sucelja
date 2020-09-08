import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NovostiStyles from "../styles/novosti.module.css"

const Novosti = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Novosti " />
      <div className={NovostiStyles.page}>
        <h1 className={NovostiStyles.tittle}>Novosti iz hrvatskog rukometa</h1>
        <div className={NovostiStyles.wrapper}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={NovostiStyles.container}>
              <Link to={node.fields.slug}>
                <img
                  className={NovostiStyles.image}
                  src={node.frontmatter.image.publicURL}
                  alt="Title"
                />
                <h3 className={NovostiStyles.naslov}>
                  {node.frontmatter.title}{" "}
                  <p className={NovostiStyles.datum}>
                    {" "}
                    {node.frontmatter.date}
                  </p>
                </h3>

                {/* <p>{node.excerpt}</p> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image {
              publicURL
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
export default Novosti
