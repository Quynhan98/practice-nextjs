import { GetStaticProps } from 'next'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { Flex, Spinner, Text } from '@chakra-ui/react'

// Components
import Button from '@components/Button'
import CardProduct from '@components/CardProduct'
import BodyContent from '@components/BodyContent'

// Types
import { IProduct } from '@self-types/index'

// Hooks
import { usePagination } from '@hooks/usePagination'
import { useDebounce } from '@hooks/useDebounce'

// Constants
import { PRODUCT_NOT_FOUND, SERVER_ERROR } from '@constants/index'

// Services
import { fetcherApi } from '@services/index'

interface IHomeProps {
  products: IProduct[]
  error: string
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const products: IProduct[] = await fetcherApi(`/products?page=1&limit=6`)

    return {
      props: {
        products,
      },
    }
  } catch (error) {
    return {
      props: {
        error: SERVER_ERROR,
      },
    }
  }
}

const Home = ({ products, error }: IHomeProps) => {
  const router = useRouter()
  const {
    paginatedData,
    size,
    setSize,
    error: paginationError,
    isEmpty,
    isLoadingMore,
    isReachingEnd,
  } = usePagination<IProduct[]>('/products?')

  const [searchValue, setSearchValue] = useState<string>('')
  const searchTerm = useDebounce(searchValue, 500)

  const listProduct = useMemo(() => {
    if (
      !paginatedData ||
      (paginatedData && paginatedData.length === products.length)
    ) {
      return products
    }
    return paginatedData
  }, [paginatedData, products])

  // Handle change search
  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const inputSearchValue = e.target.value

    setSearchValue(inputSearchValue)
  }

  // Handle search when user press enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchTerm && e.key === 'Enter') {
      router.push(`/search?param=${searchTerm}`)
    } else {
      router.push('/')
    }
  }

  // Handle search when user press submit button
  const handleSubmitSearch = () => {
    if (searchTerm) {
      router.push(`/search?param=${searchTerm}`)
    } else {
      router.push('/')
    }
  }

  // Handle load more
  const handleLoadMore = useCallback(() => {
    setSize(size + 1)
  }, [setSize, size])

  const renderContent = useMemo(() => {
    if (error || paginationError) {
      return (
        <Text variant="warning" size="heading">
          {SERVER_ERROR}
        </Text>
      )
    }

    if (!listProduct) {
      return <Spinner />
    }

    if (isEmpty) {
      return (
        <Text variant="primary" size="heading">
          {PRODUCT_NOT_FOUND}
        </Text>
      )
    }

    return (
      <>
        <Flex flexWrap="wrap" gap="24px" paddingBottom="60px">
          {listProduct.map((product) => (
            <CardProduct key={`product-${product.id}`} product={product} />
          ))}
        </Flex>
        <Button
          isDisabled={isReachingEnd}
          isLoading={isLoadingMore}
          onClick={handleLoadMore}
          margin="0 auto"
          variant="primary"
          size="medium"
        >
          Load More
        </Button>
      </>
    )
  }, [
    error,
    isEmpty,
    isLoadingMore,
    isReachingEnd,
    listProduct,
    paginationError,
  ])

  return (
    <BodyContent
      onChange={handleOnChangeSearch}
      onKeyDown={handleKeyDown}
      onClick={handleSubmitSearch}
    >
      {renderContent}
    </BodyContent>
  )
}

export default Home
