import logo from '../../assets/images/logo.svg'

import * as S from './Header.styles'

export const Header = () => (
  <S.Wrapper>
    <img src={logo} alt="MyContacts" />

    <S.InputSearchContainer>
      <input type="text" name="" id="" placeholder='Pesquisar contato...'/>
    </S.InputSearchContainer>
  </S.Wrapper>
)
