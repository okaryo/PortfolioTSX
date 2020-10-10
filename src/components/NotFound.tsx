import React from 'react'

import notFoundImage from '../images/not_found.png'
import '../stylesheets/NotFound.css'

const NotFound = () => {
  return(
    <div>
      <div className="headerSpace" />
      <section className="mainBody notFound_body">
        <h1 className="notFound_header">Not Found</h1>
        <img src={notFoundImage} height="240" width="240" alt="Not Found" loading="lazy" />
      </section>
    </div>
  )
}

export default NotFound
