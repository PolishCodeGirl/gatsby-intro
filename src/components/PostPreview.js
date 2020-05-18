import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

import ReadLink from './ReadLink'

const PostPreview = ({ post }) => (
    <Article>
        <ImageLink to={post.slug}>
            <StyledImage fluid={post.image.sharp.fluid} alt={post.alt} />
        </ImageLink>
        <div>
            <h3>
                <Link to={post.slug}>{post.title}</Link>
            </h3>
            <p>{post.excerpt}</p>
            <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
        </div>
    </Article>
)

export default PostPreview

const Article = styled.article`
    display: flex;
     border-bottom: 1px solid #ddd;
      margin-top: 0;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
`

const ImageLink = styled(Link)`
    margin: 1rem 1rem 0 0;
    width: 100px;
`

const StyledImage = styled(Image)`
    * {
        margin-top: 0;
    }
`