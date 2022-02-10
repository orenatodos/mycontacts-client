import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    & + & {
      margin-top: 16px;
    }
  `}
`
