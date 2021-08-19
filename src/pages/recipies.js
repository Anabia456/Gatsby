import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Img from "gatsby-image"
import Helmet from 'react-helmet'

function Recipies({ data }) {
    console.log(data)
    const recipies = data.allMarkdownRemark.nodes
    // const { img } = data.markdownRemark.frontmatter
    return (
        <div>
            <Layout>
            <Helmet>
                <title>Cake | Recipies</title>
            </Helmet>
                <h1 className="text-center mt-5">Recipies</h1>
                        {/* <img src="" alt="" />
                        <h1>title</h1>
                    <h3>stack</h3> */}
            <div className="container">
                <div className="recipies mt-5">
                        {recipies.map(recipe => (
                    <Link to={"/projects/" + recipe.frontmatter.slug} className="nav-link" key={recipe.id}>
                        <div>
                            {/* <img src={ img } style={{width:'20%'}} alt="images can not loaded"/> */}
                            <h3>{ recipe.frontmatter.title }</h3>
                            <p>{ recipe.frontmatter.recipieNo }</p>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
            </Layout>
        </div>
    )
}

export default Recipies

// exporting page query

export const query = graphql`
query RecipiesQuery {
    allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
        nodes {
          frontmatter {
            img
            recipieNo
            slug
            title
          }
          id
        }
      }
    }
`