import { ContactForm } from '../../components/ContactForm/ContactForm'
import { PageHeader } from '../../components/PageHeader'

export const NewContact = () => (
  <>
    <PageHeader title="Novo contato" />
    <ContactForm buttonLabel="Cadastrar" />
  </>
)
