import styled, { css } from "styled-components";

export const Button = styled.button`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    padding: 0 20px;
    display: inline-block;
    transition: all 0.2s;
    margin: 5px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: 42px;
    font-size: 14px;
    border-radius: 5px;
    font-weight: 600;
  }

  &:hover,
  &:active,
  &:focus {
    outline: none;
  }

  &:disabled,
  & [disabled] {
    background-color: #c9cdce;
    color: #80898b;
    cursor: not-allowed;
    border: 1px solid #a5abac;
  }

  ${({ variant, disabled }) => {
    if (variant === "primary" && !disabled) {
      return css`
        border: 1px solid black;
        background-color: red;
        color: black;
      `;
    } else if (variant === "secondary" && !disabled) {
      return css`
        border: 1px solid blue;
        background-color: yellow;
        color: grey;
      `;
    }
  }}
`;
