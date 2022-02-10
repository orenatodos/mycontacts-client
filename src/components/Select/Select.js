import styled, { css } from 'styled-components'

export const Select = styled.select`
  ${({ theme }) => css`
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
    transition: border-color 0.2 ease-in;

    &:focus {
      border-color: ${theme.colors.primary.main};
    }
  `}
`
