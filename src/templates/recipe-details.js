import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Navbar.css'

function RecipeDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, recipieNo, img } = data.markdownRemark.frontmatter

    return (
        <div>
            <Layout>
                <div className="container">
                    <div className="recipe-details">
                            <h1 className="text-center">{title}</h1>
                            <h2 className="text-center">{recipieNo}</h2>
                        <div className="row">
                            <div className="col-md-8">
                            <p className="recipe-html" dangerouslySetInnerHTML={{__html: html}} />
                            </div>
                            <div className="col-md-4">
                                <div className="recipe-img mt-5">
                                    <img style={{width:'100%'}} src={img} alt="img can not be loaded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
export default RecipeDetails

export const query = graphql`
query RecipeQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        recipieNo
        title
        img
      }
    }
  }
  

`
