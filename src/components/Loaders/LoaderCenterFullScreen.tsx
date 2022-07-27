import React from 'react'
import styled from 'styled-components'
import { Loader } from './Loader'

const StyledLoaderWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`


export const LoaderCenterFullScreen = () => {
    return (
        <StyledLoaderWrapper>
            <Loader />
        </StyledLoaderWrapper>
    )
}
