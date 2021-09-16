// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout_index'
import Hero from "../components/hero"
import Title from "../components/title"


// Step 2: Define your component
const IndexPage = (props) => {    
  return (
    <Layout >
     <h1>{props.location.key}</h1>
  </Layout>
  
  )
}

// Step 3: Export your component
export default IndexPage