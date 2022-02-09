import logo from '../../assets/images/logo.svg'

import * as S from './Header.styles'

export const Header = () => (
  <S.Wrapper>
    <img src={logo} alt="MyContacts" />
  </S.Wrapper>
)
