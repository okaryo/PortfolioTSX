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
  grid-template-columns: repeat(auto-fill, minmax(320px, max-content));
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  justify-content: space-evenly;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, 48%);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, 100%);
    grid-row-gap: 16px;
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
