import { Link } from 'react-router-dom'

import { ReactComponent as ArrowIcon } from '../../assets/images/icons/arrow.svg'
import { ReactComponent as EditIcon } from '../../assets/images/icons/edit.svg'
import { ReactComponent as TrashIcon } from '../../assets/images/icons/trash.svg'

import * as S from './Home.styles'

export const Home = () => (
  <S.Wrapper>
    <S.InputSearchContainer>
      <input type="text" name="" id="" placeholder='Pesquisar contato...'/>
    </S.InputSearchContainer>

    <S.Header>
      <strong>3 contatos</strong>
      <Link to="/new">Novo contato</Link>
    </S.Header>

    <S.ListWrapper>
      <header>
        <button type="button">
          <span>Nome</span>
          <ArrowIcon />
        </button>
      </header>

      <S.Card>
        <div className="info">
          <div className="contact-name">
            <strong>Renato Silva</strong>
            <small>Instagram</small>
          </div>
          <span>orenatodos@gmail.com</span>
          <span>(11) 9999-9999</span>
        </div>

        <div className="actions">
          <Link to="/edit/123">
            <EditIcon />
          </Link>
          <button type="button">
            <TrashIcon />
          </button>
        </div>
      </S.Card>
    </S.ListWrapper>
  </S.Wrapper>
)
