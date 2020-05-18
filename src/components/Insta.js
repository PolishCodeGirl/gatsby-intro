import React from 'react'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

import useInstagram from '../hooks/useInstagram'

const Insta = () => {
    const instaPhotos = useInstagram();
    const { username } = instaPhotos[0];

    return (
        <>
            <h2>Instagram posts from @{username}</h2>
            <Wrapper>
                {instaPhotos.map(photo => (
                    <InstaAnchor href={`https://instagram.com/p/${photo.id}`} key={photo.id}>
                        <ImageStyled fluid={photo.fluid} alt={photo.caption} />
                    </InstaAnchor>
                ))} 
            </Wrapper>
            <a href={`https://instagram.com/${username}`}> 
                See more on Instagram &rarr;
            </a>
        </>
    )
}

export default Insta

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem -0.5rem;
    padding: 0.5rem 0;
`

const ImageStyled = styled(Image)`
    width: 100%;

    * {
        margin-top: 0;
    }
`

const InstaAnchor = styled.a`
    box-shadow: 0;
    display: block;
    margin: 0.5rem;
    max-width: calc(33% - 1rem);
    width: 120px;
    transition: 200ms box-shadow linear;

    :focus,
    :hover {
        box-shadow: 0 2px 14px #22222244;
        z-index: 10;
    }
`