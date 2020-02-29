import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'

import Hoem from '../../containers/homePage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Hoem} />
      </Switch>
    </Router>
  )
}
export default Routes
