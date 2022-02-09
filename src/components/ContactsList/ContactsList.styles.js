import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 32px;
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    a {
      color: ${theme.colors.primary.main};
      text-decoration: none;
      font-weight: 700;
      border: 2px solid ${theme.colors.primary.main};
      padding: 8px 16px;
      border-radius: 4px;
      transition: all 0.2s ease-in;

      &:hover {
        background: ${theme.colors.primary.main};
        color: #fff;
      }
    }
  `}
`

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 24px;

    header {
      margin-bottom: 8px;

      button {
        background: transparent;
        border: 0;
        display: flex;
        align-items: center;

        span {
          margin-right: 8px;
          font-weight: 700;
          color: ${theme.colors.primary.main};
        }
      }
    }
  `}
`

export const Card = styled.article`
  ${({ theme }) => css`
    background: #fff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + & {
      margin-top: 16px;
    }

    .info {
      .contact-name {
        display: flex;
        align-items: center;

        small {
          background: ${theme.colors.primary.lighter};
          color: ${theme.colors.primary.main};
          font-weight: bold;
          text-transform: uppercase;
          padding: 4px;
          border-radius: 4px;
          margin-left: 8px;
        }
      }

      span {
        display: block;
        font-size: 14px;
        color: ${theme.colors.gray[200]};
      }
    }

    .actions {
      display: flex;
      align-items: center;

      button {
        background: transparent;
        border: 0;
        margin-left: 8px;
      }
    }
  `}
`
