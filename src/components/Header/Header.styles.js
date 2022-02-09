import styled from 'styled-components'

export const Wrapper = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InputSearchContainer = styled.form`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: 0;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`
