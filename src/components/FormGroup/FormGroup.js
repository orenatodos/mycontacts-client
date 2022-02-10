import PropTypes from 'prop-types'

import * as S from './FormGroup.styles'

export const FormGroup = ({ children }) => (
  <S.Wrapper>
    {children}
  </S.Wrapper>
)

FormGroup.propTypes = {
  children: PropTypes.node.isRequired
}
