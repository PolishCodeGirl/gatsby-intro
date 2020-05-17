import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import ReadLink from './ReadLink'

const PostPreview = ({ post }) => (
    <Article>
        <h3>
            <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
    </Article>
)

export default PostPreview

const Article = styled.article`
     border-bottom: 1px solid #ddd;
      margin-top: 0.75rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
`