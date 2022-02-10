import ReactDOM from 'react-dom'

import * as S from './Loader.styles'

export const Loader = () => ReactDOM.createPortal(
  <S.Overlay>
    <S.Loader />
  </S.Overlay>,
  document.getElementById('loader-root')
)
