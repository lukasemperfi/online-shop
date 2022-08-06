import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { calcAdaptiveValue } from '../../styles/helpers';


export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const Col = styled.div`
  position: relative;
  width: 50vw;
  height: 100vh;
`

export const womanImageStyle = css`
  object-position: 29% bottom;
`

export const manImageStyle = css`
  object-position: bottom;
`

export const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

export const LinkStyled = styled(Link)`
  color: white;
  ${calcAdaptiveValue('font-size', '25px', '65px', '320px', '1200px')};
  font-weight: 600;
  letter-spacing: 5px;
  line-height: 45px;
  text-transform: uppercase;
`
