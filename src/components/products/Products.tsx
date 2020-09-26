import React, { useEffect, useState } from 'react'
import '../../stylesheets/Products.css'

import {
  CLOSED_BUTTON_COLOR,
  PRIMARY_BUTTON_COLOR,
  GITHUB_BUTTON_COLOR
} from '../../constants/colors'

type Products = {
  name: string,
  date: string,
  image: string
  imagePosition: string
  description: string
  links: {
    type: string
    link: string
  }[]
  status: string
}

type ButtonListProps = {
  buttonListProps: {
    links: {
      type: string
      link: string
    }[]
    status: string
  }
}

type ButtonProps = {
  buttonProps: {
    link: string
    type: string
  }
}

const Products = () => {
  const ProductList = () => {
    const [products, setProducts] = useState([] as Products[])
    useEffect(() => {
      fetch('products.json')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    const ButtonList: React.FC<ButtonListProps> = (props) => {
      const { links, status } = props.buttonListProps
      const Button: React.FC<ButtonProps> = (props) => {
        const { link, type } = props.buttonProps
        const DEFAULT_BUTTON_TEXT_COLOR = '#FFFFFF'
        const DEFAULT_BUTTON_COLOR = CLOSED_BUTTON_COLOR
        let buttonColor = DEFAULT_BUTTON_COLOR
        let buttonTextColor = DEFAULT_BUTTON_TEXT_COLOR
        let buttonText
        if (type === 'closed') {
          buttonColor = CLOSED_BUTTON_COLOR
          buttonTextColor = '#231815'
          buttonText = 'Closed'
        } else if (type === 'github') {
          buttonColor = GITHUB_BUTTON_COLOR
          buttonText = 'GitHub'
        } else if (type === 'site') {
          buttonColor = PRIMARY_BUTTON_COLOR
          buttonText = 'Visit Site'
        } else if (type === 'store') {
          buttonColor = PRIMARY_BUTTON_COLOR
          buttonText = 'Visit Store'
        } else {
          buttonColor = PRIMARY_BUTTON_COLOR
          buttonText = 'Visit'
        }
    
        return(
          <div style={{ backgroundColor: buttonColor }} className="portfolio_product_card_button">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: buttonTextColor }}
            >
              {buttonText}
            </a>
          </div>
        )
      }

      if (status === 'closed') {
        return(
          <div className="portfolio_product_card_button_block">
            <Button buttonProps={{ link: '', type: 'closed' }} />
          </div>
        )
      } else {
        const buttonItems = links.map((link) =>
          <Button key={link.type} buttonProps={{ link: link.link, type: link.type }} />
        )
        return(
          <div className="portfolio_product_card_button_block">
            {buttonItems}
          </div>
        )
      }
    }

    return(
      <div className="portfolio_product_card-grid">
        {products.map((product, index) => {
          let imagePositionStyle = {}
          if (product.imagePosition === 'middle') imagePositionStyle = { bottom: 'auto' }

          return(
            <div key={index} className="portfolio_product_card">
              <div className="portfolio_product_card_image_continer">
                <img
                  style={imagePositionStyle}
                  src={product.image} alt={product.name}
                  loading="lazy"
                />
              </div>
              <div className="portfolio_product_card_text_container">
                <h3>{product.name}</h3>
                <p className="portfolio_product_card_text_year">{product.date}</p>
                <p className="portfolio_product_card_text_description">{product.description}</p>
                <ButtonList buttonListProps={{ links: product.links, status: product.status }} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return(
    <div className="main_container">
      <ProductList />
    </div>
  )
}

export default Products
