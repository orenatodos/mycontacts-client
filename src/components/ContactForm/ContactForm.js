import { useState } from 'react'
import PropTypes from 'prop-types'

import { formatPhone } from '../../utils/formatPhone'
import { isEmailValid } from '../../utils/isEmailValid'
import { useErrors } from '../../hooks/useErrors'

import { Button } from '../Button'
import { FormGroup } from '../FormGroup/FormGroup'
import { Input } from '../Input'
import { Select } from '../Select'

import * as S from './ContactForm.styles'

export const ContactForm = ({ buttonLabel }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState('')

  const { setError, removeError, getErrorMessageByFieldName } = useErrors()

  function handleNameChange (event) {
    setName(event.target.value)

    if (!event.target.value) {
      setError({
        field: 'name',
        message: 'Nome é obrigatório.'
      })
    } else {
      removeError('name')
    }
  }

  function handleEmailChange (event) {
    setEmail(event.target.value)

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({
        field: 'email',
        message: 'E-mail inválido.'
      })
    } else {
      removeError('email')
    }
  }

  function handlePhoneChange (event) {
    setPhone(formatPhone(event.target.value))
  }

  function handleSubmit (event) {
    event.preventDefault()

    console.log({ name, email, phone, category })
  }

  return (
    <S.Wrapper onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          error={getErrorMessageByFieldName('name')}
          placeholder='Nome'
          value={name}
          onChange={handleNameChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          error={getErrorMessageByFieldName('email')}
          type="email"
          placeholder='E-mail'
          value={email}
          onChange={handleEmailChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder='Telefone'
          value={phone}
          onChange={handlePhoneChange}
          maxLength={15}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <Button type="submit">{buttonLabel}</Button>
    </S.Wrapper>
  )
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}
