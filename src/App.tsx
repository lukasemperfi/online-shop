import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Image } from './components/UI/Image/Image'
import { Modal } from './components/UI/Modal/Modal'
import catImage from './assets/catBig.webp'

const CardContainer = styled.div`
  max-width: 800px;
  background-color: red;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 0 0 33.333%;
  min-height: 300px;
  background-color: blue;
`;

const imageSize = css`
    width: 50%;
    height: 300px;
`
export const App = () => {

  return (
<div>app</div>
  )
}

