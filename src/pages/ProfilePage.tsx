import React from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Footer from '../features/Footer'

const ProfilePage = () => {
  return(
    <div>
      <Header activePage={'profile'} />
      <Profile />
      <Footer />
    </div>
  )
}

export default ProfilePage
