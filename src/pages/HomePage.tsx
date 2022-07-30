import React, { ChangeEvent, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { AdaptiveImage } from '../components/Image/AdaptivImage'
import womanImage from '../assets/woman.jpg'
import womanThumbImage from '../assets/womanThumb.jpg'
import manImage from '../assets/man.jpg'
import manThumbImage from '../assets/manThumb.jpg'
import carImage from '../assets/car.jpg'
import carThumbImage from '../assets/carThumb.jpg'
import { calcAdaptiveValue } from '../styles/helpers'
import { Link } from 'react-router-dom'
import { ProductsRoutes } from '../navigation/routeNames'
import { PageContainer } from '../components/PageContainer/PageContainer'
import { ResponsiveAppBar } from '../components/ResponsiveAppBar/ResponsiveAppBar'
import { addProduct } from '../store/productsSlice/productsSlice'
import { useAppDispatch } from '../hooks/redux'


const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
const Col = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
`

const womanImageStyle = css`
  object-position: 29% bottom;
`
const manImageStyle = css`
  object-position: bottom;
`

const StyledTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const StyledLink = styled(Link)`
  color: white;
  ${calcAdaptiveValue('font-size', '25px', '65px', '320px', '1200px')};
  font-weight: 600;
  letter-spacing: 5px;
  line-height: 45px;
  text-transform: uppercase;
`

export const HomePage = () => {
 
  return (
      <Container>
        <Col>
          <AdaptiveImage
            src={womanImage}
            thumbImage={womanThumbImage}                        
            imageStyles={womanImageStyle}
            width='50vw'
            height='100vh'
            blur
          />
          <StyledTitle>
            <StyledLink to='/womens'>woman</StyledLink>
          </StyledTitle>
        </Col>
        <Col>
          <AdaptiveImage
            src={manImage}
            imageStyles={manImageStyle}
            thumbImage={manThumbImage}
            width='50vw'
            height='100vh'     
            blur
          />
          <StyledTitle>
            <StyledLink to='/mens'>man</StyledLink>
          </StyledTitle>
        </Col>
      </Container>
  )
}
