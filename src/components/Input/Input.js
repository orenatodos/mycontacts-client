import styled, { css } from 'styled-components'

export const Input = styled.input`
  ${({ theme, error }) => css`
    width: 100%;
    background: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    height: 52px;
    border: 0;
    border-radius: 4px;
    outline: none;
    padding: 0 16px;
    font-size: 16px;
    border: 2px solid transparent;
    appearance: none;
    transition: border-color 0.2 ease-in;

    &:focus {
      border-color: ${theme.colors.primary.main};
    }

    ${!!error && css`
      color: ${theme.colors.danger.main};
      border-color: ${theme.colors.danger.main} !important;
    `}
  `}
`
