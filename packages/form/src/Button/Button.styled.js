import styled, { css } from "styled-components";

export const Button = styled.button`
  &,
  &:link,
  &:visited {
    text-decoration: none;
    display: inline-block;
    transition: all 0.2s;
    margin: 5px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: 42px;
    font-size: 14px;
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
  }

  ${({ variant, disabled }) => {
    if (variant === "primary" && !disabled) {
      return css`
        border: 10px solid black;
        background-color: red;
        padding: 10px;
      `;
    } else if (variant === "secondary" && !disabled) {
      return css`
        border: 10px solid black;
        background-color: yellow;
        padding: 10px;
      `;
    }
  }}
`;
