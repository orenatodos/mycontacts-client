import { Button } from '../Button'

import * as S from './Modal.styles'

export const Modal = () => (
  <S.Overlay>
    <S.Wrapper>
      <h1>Titulo do Modal</h1>
      <p>Corpo do Modal</p>
      <S.Footer>
        <button type="button" className='cancel-button'>Cancelar</button>
        <Button type="button">Deletar</Button>
      </S.Footer>
    </S.Wrapper>
  </S.Overlay>
)
