import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    margin-bottom: 24px;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;

      span {
        color: ${theme.colors.primary.main};
        font-weight: bold;
      }

      svg {
        margin-right: 8px;
        transform: rotate(-90deg);
      }
    }

    h1 {
      font-size: 24px;
    }
  `}
`
