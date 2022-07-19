import React from 'react'
import styled, { css } from 'styled-components'
import { AdaptiveImage } from '../components/Image/AdaptivImage'
import womanImage from '../assets/woman.jpg'
import manImage from '../assets/man.jpg'
import { calcAdaptiveValue } from '../styles/helpers'
import { Link } from 'react-router-dom'
import { ProductsRoutes } from '../navigation/routeNames'
import { PageContainer } from '../components/PageContainer/PageContainer'


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
const Col = styled.div`
  flex: 0 0 50%;
  position: relative;
`

const womanImageStyle = css`
  object-position: 29% bottom;
`
const manImageStyle = css`
  object-position: bottom;
`

const Title = styled.div`
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

const imageAspectRatio = 4/5

export const HomePage = () => {
  return (
    <PageContainer>
      <Container>
        <Col>
          <AdaptiveImage
            src={womanImage}
            imageStyles={womanImageStyle}
            aspectRatio={imageAspectRatio}
          />
          <Title>
            <StyledLink to='products/womens'>woman</StyledLink>
          </Title>
        </Col>
        <Col>
          <AdaptiveImage
            src={manImage}
            imageStyles={manImageStyle}
            aspectRatio={imageAspectRatio}
          />
          <Title>
            <StyledLink to='products/mens'>man</StyledLink>
          </Title>
        </Col>
      </Container>
    </PageContainer>

  )
}
