import useSWR from 'swr'
import { Box, Heading, Text } from '@chakra-ui/react'

// Components
import CardDetail from '@components/CardDetail'

// Constants
import { BASE_URL } from '@constants/endPoints'

// Types
import { ICart, IProductDetail } from '@self-types/index'

// Services
import { addToCart } from '@services/index'

export const getStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}/products`)
  const data: IProductDetail[] = await res.json()

  const paths = data.map((product) => {
    return { params: { id: product.id.toString() } }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const { id } = context.params

  const res = await fetch(`${BASE_URL}/products/${id}`)
  const data: IProductDetail = await res.json()

  return { props: { product: data } }
}

export interface DetailPageProps {
  product: IProductDetail
}

const DetailPage = ({ product }: DetailPageProps) => {
  const { data: cartItem, mutate } = useSWR<ICart>(`${BASE_URL}/carts/1`)

  // Handle add product into cart
  const handleAddCart = async (data: IProductDetail) => {
    if (cartItem) {
      const listProduct = [...cartItem.products, data]

      await addToCart({ id: 1, products: listProduct }, `${BASE_URL}/carts/1`)

      mutate(cartItem)
    }
  }

  return (
    <Box pt="128px" pb="100px">
      <CardDetail productDetail={product} handleAddCart={handleAddCart} />

      <Box pt="123px">
        <Heading
          as="h3"
          pb="34px"
          borderBottom="1px"
          fontSize="medium"
          fontWeight="base"
          display="inline-block"
        >
          Description
        </Heading>
        <Text textAlign="initial" pt="40px">
          {product.description}
        </Text>
      </Box>
    </Box>
  )
}

export default DetailPage
