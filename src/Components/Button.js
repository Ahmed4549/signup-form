import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    background: ${props => props.primary ? "gray" : "green"};
    color:${props => props.primary ? "black" : "white"};;
    padding:15px 20px;
    border:none;
    border-radius:20px;
    text-transform: uppercase;
    margin: 15px;
    transition: .6s ease;
    text-transform: uppercase;
    outline:none;

    &:hover{
        transform: scale(1.1);
    }
`;

function Button({primary, children}) {
    return (
        <div>
            <StyledButton primary={primary}>{children}</StyledButton>
        </div>
    )
}

export default Button
