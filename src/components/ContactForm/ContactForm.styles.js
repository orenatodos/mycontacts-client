import styled, { css } from 'styled-components'

import { Button } from '../Button'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    ${Button}{
      width: 100%;
      margin-top: 24px;
    }

    small {
      color: ${theme.colors.danger.main};
      font-size: 12px;
      display: block;
      margin-top: 8px;
    }
  `}
`
