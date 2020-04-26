import React from 'react'
import { products } from '../constants/Products'
import '../stylesheets/Products.css'

interface Products {
  products: Array<{
    title: string,
    year: string,
    imageName: string,
    imagePositionMiddle: boolean,
    description: string,
    buttons: Array<{
      buttonText: string,
      buttonColor: string,
      buttonUrl: string
    }>
  }>
}

interface Buttons {
  buttonProps: Array<{
    buttonText: string,
    buttonColor: string,
    buttonUrl: string
  }>
}

const Products = () => {
  const Buttons = (props: Buttons) => {
    const buttons = props.buttonProps

    const Buttons = buttons.map((button, index) => {
      const buttonStyle = { backgroundColor: button.buttonColor }
      let fontColor = {}
      if (button.buttonText === 'Closed') fontColor = { color: '#231815'}

      return(
        <div key={index} style={buttonStyle} className="portfolio_product_card_button">
          <a
            href={button.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={fontColor}
          >
            {button.buttonText}
          </a>
        </div>
      )
    })

    return(
      <div className="portfolio_product_card_button_block">
        {Buttons}
      </div>
    )
  }

  const ProductCards = (props: Products) => {
    const products = props.products

    const ProductCards = products.map((product, index) => {
      let imagePositionStyle = {}
      if (!product.imagePositionMiddle) imagePositionStyle = { bottom: 'auto' }

      return(
        <div key={index} className="portfolio_product_card">
          <div className="portfolio_product_card_image_continer">
            <img
              style={imagePositionStyle}
              src={`http://okaryo.github.io/api/images/portfolio/products/${product.imageName}`} alt={product.title}
            />
          </div>
          <div className="portfolio_product_card_text_container">
            <h3>{product.title}</h3>
            <p className="portfolio_product_card_text_year">{product.year}</p>
            <p className="portfolio_product_card_text_description">{product.description}</p>
            <Buttons buttonProps={product.buttons} />
          </div>
        </div>
      )
    })

    return(
      <div className="portfolio_product_card-grid">
        {ProductCards}
      </div>
    )
  }

  return(
    <div className="portfolio_products_container">
      <ProductCards
        products={products}
      />
    </div>
  )
}

export default Products
