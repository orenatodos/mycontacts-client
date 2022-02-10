import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 52px;
    border: 0;
    background: ${theme.colors.primary.main};
    font-size: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    transition: background 0.2s ease-in;

    &:hover {
      background: ${theme.colors.primary.light};
    }

    &:active {
      background: ${theme.colors.primary.dark};
    }

    &[disabled] {
      background: #ccc;
      cursor: default;
    }
  `}
`
