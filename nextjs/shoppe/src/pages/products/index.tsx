import { GetStaticProps } from 'next'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { Box, Flex, Heading, Spinner, Text } from '@chakra-ui/react'

// Components
import Button from '@components/Button'
import CardProduct from '@components/CardProduct'
import Search from '@components/Search'

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

const Home = ({ products }: IHomeProps) => {
  const router = useRouter()
  const { search } = router.query as {
    search: string
  }

  const {
    paginatedData,
    size,
    setSize,
    error,
    isEmpty,
    isLoadingMore,
    isReachingEnd,
  } = usePagination<IProduct[]>(
    search ? `/products?search=${search}&` : `/products?`,
  )

  const [searchValue, setSearchValue] = useState<string>('')

  const listProduct = useMemo(() => {
    return products.length === paginatedData?.length ? products : paginatedData
  }, [paginatedData, products])

  const searchTerm = useDebounce(searchValue, 500)

  // Handle change search
  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const inputSearchValue = e.target.value

    setSearchValue(inputSearchValue)
  }

  // Handle search when user press enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchTerm !== '' && searchTerm !== undefined) {
      if (e.key === 'Enter') {
        router.push(`?search=${searchTerm}`)
      }
    } else {
      router.push('/')
    }
  }

  // Handle search when user press submit button
  const handleSubmitSearch = () => {
    if (searchTerm !== '' && searchTerm !== undefined) {
      router.push(`?search=${searchTerm}`)
    } else {
      router.push('/')
    }
  }

  // Handle load more
  const handleLoadMore = useCallback(() => {
    setSize(size + 1)
  }, [setSize, size])

  const renderContent = useMemo(() => {
    if (error) {
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
    handleLoadMore,
    isEmpty,
    isLoadingMore,
    isReachingEnd,
    listProduct,
  ])

  return (
    <Box pt="96px">
      <Heading as="h2" fontSize="large" fontWeight="medium">
        Shop The Latest
      </Heading>
      <Flex pt="40px" gap="35px" justifyContent="space-between">
        <Box minW="261px">
          <Search
            onChange={handleOnChangeSearch}
            onKeyDown={handleKeyDown}
            onClick={handleSubmitSearch}
            placeholder="Search..."
          />
        </Box>
        <Flex
          flexDirection="column"
          justifyContent="center"
          paddingBottom="50px"
          margin="0 auto"
        >
          {renderContent}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Home
