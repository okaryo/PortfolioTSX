import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ProductsPage from './pages/ProductsPage'
import ProfilePage from './pages/ProfilePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductsPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default App;
