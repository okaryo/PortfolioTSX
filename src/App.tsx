import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import ProductsPage from './pages/ProductsPage'
import ProfilePage from './pages/ProfilePage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './features/NotFound'
import Header from './features/Header'
import Footer from './features/Footer'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
