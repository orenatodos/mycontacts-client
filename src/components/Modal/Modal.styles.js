import styled, { css } from 'styled-components'

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  ${({ theme, danger }) => css`
    width: 100%;
    max-width: 450px;
    background: #fff;
    border-radius: 4px;
    padding: 24px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);

    h1 {
      font-size: 22px;
      color: ${danger ? theme.colors.danger.main : theme.colors.gray[900]};
    }

    p {
      margin-top: 8px;
    }
  `}
`

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: 0;
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`
