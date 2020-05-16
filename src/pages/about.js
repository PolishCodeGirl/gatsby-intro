import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About = () => (
    <Layout>
        <h1>About Page</h1>
        <p>My gatsby page</p>
        <Link to='/'>&larr; Go to home me</Link>
    </Layout>)

export default About