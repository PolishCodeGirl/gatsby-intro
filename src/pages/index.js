import React from 'react'
import { Link } from 'gatsby'

import usePosts from '../hooks/usePosts'

import Layout from '../components/layout'
import PostPreview from '../components/PostPreview'

export default () => {
    const posts = usePosts();

    return (
        <Layout>
            <h1>Home Page</h1>
            <p>Hi Marzena!</p>
            <Link to='/about/'>Go to about me &rarr;</Link>
            
            <h2>Read my posts</h2>
            {posts.map(post => (
                <PostPreview post={post} />
            ))}
        </Layout>)
}