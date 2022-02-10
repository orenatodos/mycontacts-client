import PropTypes from 'prop-types'

import * as S from './FormGroup.styles'

export const FormGroup = ({ children, error }) => (
  <S.Wrapper>
    {children}
    {error && <small>{error}</small>}
  </S.Wrapper>
)

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string
}

FormGroup.defaultProps = {
  error: null
}
