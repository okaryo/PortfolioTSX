import styled from '@emotion/styled'

import { dateFormatter } from '../../../utils/dateFormatter'
import Button from './Button'

type ProductCardProps = {
  name: string,
  date: string,
  description: string,
  imageUrl: string,
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
              0 1px 3px 1px rgba(60, 64, 67, 0.16);
  border-radius: 3px;
`

const CardImage = styled.img`
  display: block;
  aspect-ratio: 3/2;
  object-fit: contain;
  width: 100%;
  overflow: hidden;
  border-radius: 3px 3px 0 0;
`

const CardBodyContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding: 10px;
  border-top: 1px solid #e8eaed;
`

const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-bottom: 16px;
`

const Header = styled.h3`
  display: inline-block;
  margin-bottom: 2px;
  color: #232f34;
  font-size: 24px;
  line-height: 19px;
`

const Date = styled.time`
  display: block;
  margin-bottom: 8px;
  color: #5f6368;
  font-size: 14px;
`

const Description = styled.p`
  color: #5f6368;
  font-size: 16px;
`

const Buttons = styled.div`
  display: flex;
  gap: 8px;
`

const ProductCard = (props: ProductCardProps) => {
  const { name, date, description, imageUrl, links, status } = props

    const ButtonList: React.FC<ButtonListProps> = (props: ButtonListProps) => {
      const { links, status } = props.buttonListProps


      if (status === 'closed') {
        return(
          <Buttons>
            <Button link={''} type={'closed'} />
          </Buttons>
        )
      } else {
        const buttonItems = links.map((link) =>
          <Button key={link.type} link={link.link} type={link.type} />
        )
        return(
          <Buttons>
            {buttonItems}
          </Buttons>
        )
      }
    }

  return (
    <Card>
      <CardImage src={imageUrl} alt={name} loading="lazy" />
      <CardBodyContainer>
        <CardTextContainer>
          <Header>{name}</Header>
          <Date>{dateFormatter(date)}</Date>
          <Description>{description}</Description>
        </CardTextContainer>
        <ButtonList buttonListProps={{ links: links, status: status }} />
      </CardBodyContainer>
    </Card>
  )
}

export default ProductCard
