import React from 'react'
import styled from "styled-components";


const FormBox = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:column;
`;
const Styledabel = styled.label`
    margin-bottom:15px;
    color:black;
`;
const Input = styled.input`
text-align:center;
margin:0 auto;
    padding:15px;
    outline:none;
    border:none;
    background-color:light-gray;
    width:30%;
    margin-bottom:5px;
`;

const StyledButton = styled.button`
    background: ${props => props.primary ? "gray" : "green"};
    color:${props => props.primary ? "black" : "white"};;
    padding:15px 20px;
    border:none;
    border-radius:20px;
    text-transform: uppercase;
    margin: 0 auto;
    margin-top:15px;
    transition: .6s ease;
    text-transform: uppercase;
    outline:none;
    max-width:25%;
    &:hover{
        transform: scale(1.1);
    }
`;

function Form() {
    return (
        <div>
            <FormBox>
                <Styledabel htmlFor="email">Enter Email</Styledabel>
                <Input type="email" id="email" placeholder="Enter Email" required />
                <Styledabel>Enter Password</Styledabel>
                <Input type="password" placeholder="Enter Password" required />
                <StyledButton primary value="submit" type="submit">Submit</StyledButton>
            </FormBox>
        </div>
    )
}

export default Form
