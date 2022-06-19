import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Products from './features/Products'
import Profile from './features/Profile'
import Contact from './features/Contact'
import NotFound from './features/NotFound'
import Header from './features/Header'
import Footer from './features/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
