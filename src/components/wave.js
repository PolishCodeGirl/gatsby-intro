import React, { useState } from 'react'
import styled from '@emotion/styled'

const Wave = () => {
    const [waves, setWaves] = useState(0);
    const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

    return (
        <Button onClick={() => setWaves(waves+1)}>{label}</Button>
    )
}

export default Wave

const Button = styled.button`
    background: rebeccapurple;
    border: none;
    color: white;
    font-size: 1.25rem;
`