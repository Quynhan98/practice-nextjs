import { useCallback, useMemo } from 'react'
import { Box, Heading, Spinner, Text, useToast } from '@chakra-ui/react'

// Components
import CardDetail from '@components/CardDetail'
import LoadingIndicator from '@components/LoadingIndicator'

// Types
import { IProductDetail } from '@self-types/index'

// Services
import { fetcherApi } from '@services/index'

// Constants
import { SNACKBAR_ADD_CART_SUCCESS } from '@constants/index'

// Hooks
import { useCartContext } from '@hooks/useCartContext'
import { useLoadingContext } from '@hooks/useLoadingContext'

export interface DetailPageProps {
  product?: IProductDetail
  error?: string
}

export const getStaticPaths = async () => {
  const data: IProductDetail[] = await fetcherApi(`/products`)

  const paths = data.map((product) => {
    return { params: { id: product.id.toString() } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const { id } = context.params

  const data: IProductDetail = await fetcherApi(`/products/${id}`)
  if (typeof data === 'string') {
    return { props: { error: data } }
  }

  return { props: { product: data } }
}

const DetailPage = ({ product, error }: DetailPageProps) => {
  const toast = useToast()
  const { setLoading, loading } = useLoadingContext()
  const { listCart, addCart } = useCartContext()

  const isAdded = product && !!listCart.find((item) => item.id === product.id)

  // Handle add product into cart
  const handleAddCart = useCallback(
    async (data: IProductDetail) => {
      const listProduct = [...listCart, data]

      setLoading(true)
      const dataCart = await addCart(listProduct)

      if (typeof dataCart === 'string') {
        toast({
          title: 'Error',
          description: dataCart,
          status: 'error',
          isClosable: true,
          position: 'bottom-left',
        })
      } else {
        toast({
          title: 'Success',
          description: SNACKBAR_ADD_CART_SUCCESS,
          status: 'success',
          isClosable: true,
          position: 'bottom-left',
        })
      }

      setLoading(false)
    },
    [listCart, toast],
  )

  const renderContent = useMemo(() => {
    if (error) {
      return (
        <Text variant="warning" size="heading">
          {error}
        </Text>
      )
    }

    if (!product) {
      return <Spinner />
    }

    return (
      <>
        <CardDetail
          isAdded={isAdded}
          handleAddCart={handleAddCart}
          {...product}
        />
        <Box pt={{ base: '24px', md: '123px' }}>
          <Heading
            as="h3"
            pb={{ base: '10px', md: '34px' }}
            borderBottom="1px"
            fontSize="medium"
            fontWeight="base"
            display="inline-block"
          >
            Description
          </Heading>
          <Text textAlign="initial" pt={{ base: '24px', md: '40px' }}>
            {product.description}
          </Text>
        </Box>
      </>
    )
  }, [error, isAdded, product])

  return (
    <>
      <Box pt={{ base: '10px', md: '128px' }} pb="100px">
        {renderContent}
      </Box>
      {loading && <LoadingIndicator size="lg" />}
    </>
  )
}

export default DetailPage
