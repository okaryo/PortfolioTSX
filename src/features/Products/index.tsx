import styled from '@emotion/styled'

import PageContainer from '../../components/PageContainer'
import ProductCard from './components/ProductCard'
import productsData from './data/products.json'

type Product = {
  name: string,
  date: string,
  image: string
  description: string
  links: {
    type: string
    link: string
  }[]
  status: string
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-row-gap: 20px;
  grid-column-gap: 10px;
  justify-content: space-evenly;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, 48%);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, 100%);
    grid-row-gap: 20px;
  }
`

const Products = () => {
  const products: Product[] = productsData

  return(
    <PageContainer>
      <GridContainer>
        {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              date={product.date}
              imageUrl={product.image}
              description={product.description}
              links={product.links}
              status={product.status}
            />
          )
        )}
      </GridContainer>
    </PageContainer>
  )
}

export default Products
