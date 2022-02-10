import PropTypes from 'prop-types'

import { Button } from '../Button'
import { FormGroup } from '../FormGroup/FormGroup'
import { Input } from '../Input'
import { Select } from '../Select'

import * as S from './ContactForm.styles'

export const ContactForm = ({ buttonLabel }) => (
  <S.Wrapper>
    <FormGroup>
      <Input placeholder='Nome'/>
    </FormGroup>

    <FormGroup>
      <Input placeholder='E-mail'/>
    </FormGroup>

    <FormGroup>
      <Input placeholder='Telefone'/>
    </FormGroup>

    <FormGroup>
      <Select>
        <option value="123">Instragram</option>
        <option value="123">Instragram</option>
        <option value="123">Instragram</option>
        <option value="123">Instragram</option>
        <option value="123">Instragram</option>
      </Select>
    </FormGroup>

    <Button type="submit">{buttonLabel}</Button>
  </S.Wrapper>
)

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}
