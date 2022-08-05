import styled, { css } from 'styled-components';

import { Colors } from '../../styles/styles';

interface SignupProps {
    showMessage?: boolean,
}

export const formItemStyle = css`
    margin-bottom: 20px;
`

export const showMessageActive = css`
    background-color: ${Colors.errorMessage};
    height: auto;
    visibility: visible;
    opacity: 1;
    padding: 5px 0;
    transition: 0.3s;
`


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ShowMessage = styled.div<SignupProps>`
    height: 0;
    visibility: hidden;
    opacity: 0;
    padding: 0;
    transition: 0.3s;
    overflow: hidden;

    ${({ showMessage }) => showMessage && showMessageActive}
`
