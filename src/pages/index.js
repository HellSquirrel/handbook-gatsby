import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <p>This a test page for handbook</p>
    <div>
      <Link to="/initial">Documentation lives here</Link>
    </div>
  </Layout>
)

export default IndexPage
