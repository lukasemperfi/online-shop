import React from 'react'
import styled from 'styled-components';
import { useAdminAuth } from '../hooks/useAdminAuth';
const StyledAdmin = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	background-color: black;
	z-index: 2;
`

export const AdminBar = () => {
    const isAdmin = useAdminAuth()
    if (!isAdmin) return null;

    return (
        <StyledAdmin>
            <p>Admin</p>
        </StyledAdmin>
    )
}
