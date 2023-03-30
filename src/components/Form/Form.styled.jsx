import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Input = styled.input`
    width: 260px;
    padding: 12px 18px;
    margin-bottom: 16px;
    border-radius: 4px;
    &:hover{
        border-color:green;
    }
`;
export const Label = styled.label`
    margin-bottom: 8px;
    font-weight: 500;
`;