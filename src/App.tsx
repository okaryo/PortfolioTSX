import {
  BrowserRouter as Router,
  Route,
  Routes} from 'react-router-dom'

import Contact from './features/Contact'
import Footer from './features/Footer'
import Header from './features/Header'
import NotFound from './features/NotFound'
import Products from './features/Products'
import Profile from './features/Profile'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
