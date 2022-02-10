import PropTypes from 'prop-types'

import { Button } from '../Button'

import * as S from './Modal.styles'

export const Modal = ({ danger }) => (
  <S.Overlay>
    <S.Wrapper danger>
      <h1>Titulo do Modal</h1>
      <p>Corpo do Modal</p>
      <S.Footer>
        <button type="button" className='cancel-button'>Cancelar</button>
        <Button type="button" danger>Deletar</Button>
      </S.Footer>
    </S.Wrapper>
  </S.Overlay>
)

Modal.propTypes = {
  danger: PropTypes.bool
}

Modal.defaultProps = {
  danger: false
}
