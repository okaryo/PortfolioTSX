import React from 'react'
import notFoundImage from '../assets/images/not_found.png'

const NotFound = () => {
  return(
    <div>
      <div className="headerSpace" />
      <section className="main_body notFound_body">
        <h1 className="notFound_header">Not Found</h1>
        <img src={notFoundImage} height="240" width="240" alt="Not Found" loading="lazy" />
      </section>
    </div>
  )
}

export default NotFound
