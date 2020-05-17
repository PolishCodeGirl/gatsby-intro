import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import ReadLink from '../components/ReadLink'

export const query = graphql`
    query($slug: String!) {
        mdx(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
            title
            author
        }
        body
        }
    }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
    <Layout>
        <h1>{post.frontmatter.title}</h1>
        <Author>Posted by {post.frontmatter.author}</Author>
        <MDXRenderer>{post.body}</MDXRenderer>
        <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
)

export default PostTemplate

const Author = styled.p`
    font-size: 0.75rem;
`