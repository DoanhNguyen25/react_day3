import React from 'react'
import { Wrapper } from './style'

interface Props{
    children?: React.ReactNode;
}
const Container = ({children}:Props) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Container
