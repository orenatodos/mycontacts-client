import { Route, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { NewContact } from './pages/NewContact'
import { EditContact } from './pages/EditContact'

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/new" component={NewContact} />
    <Route path="/edit/:id" component={EditContact} />
  </Switch>
)
