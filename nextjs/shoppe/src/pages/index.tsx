import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Components
import Button from '@components/Button'
import CardProduct from '@components/CardProduct'
import Search from '@components/Search'

// Types
import { IProduct } from '@self-types/index'

// Hooks
import { usePagination } from '@hooks/usePagination'
import { useCallback, useMemo } from 'react'
import { PRODUCT_NOT_FOUND, SERVER_ERROR } from '@constants/errorMessage'

const Home = () => {
  const {
    paginatedData: products,
    size,
    setSize,
    error,
  } = usePagination<IProduct[]>('/products')

  // Handle change search
  const handleOnChangeSearch = () => {
    // Handle change
  }

  // Handle search when user press enter
  const handleKeyDown = () => {
    // Handle search
  }

  // Handle search when user press submit button
  const handleSubmitSearch = () => {
    // Handle search
  }

  // Handle load more
  const handleLoadMore = useCallback(() => {
    setSize(size + 1)
  }, [setSize, size])

  const renderContent = useMemo(() => {
    if (error) {
      return (
        <Text variant="primary" size="heading">
          {SERVER_ERROR}
        </Text>
      )
    }

    if (products) {
      return (
        <Flex
          flexDirection="column"
          justifyContent="center"
          paddingBottom="50px"
        >
          <Flex flexWrap="wrap" gap="24px" paddingBottom="60px">
            {products.map((product) => (
              <CardProduct key={`product-${product.id}`} product={product} />
            ))}
          </Flex>
          <Button
            onClick={handleLoadMore}
            margin="0 auto"
            variant="primary"
            size="medium"
          >
            Load More
          </Button>
        </Flex>
      )
    }

    return (
      <Text variant="primary" size="heading">
        {PRODUCT_NOT_FOUND}
      </Text>
    )
  }, [error, handleLoadMore, products])

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
        {renderContent}
      </Flex>
    </Box>
  )
}

export default Home
