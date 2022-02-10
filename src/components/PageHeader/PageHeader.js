import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { ReactComponent as ArrowIcon } from '../../assets/images/icons/arrow.svg'

import * as S from './PageHeader.styles'

export const PageHeader = ({ title }) => (
  <S.Wrapper>
    <Link to="/">
      <ArrowIcon />
      <span>Voltar</span>
    </Link>

    <h1>{title}</h1>
  </S.Wrapper>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}
