import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

export default () => (
    <Layout>
        <h1>Home Page</h1>
        <p>Hi Marzena!</p>
        <Link to='/about/'>Go to about me &rarr;</Link>
    </Layout>)