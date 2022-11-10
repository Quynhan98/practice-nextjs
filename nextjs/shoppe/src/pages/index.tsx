import { Box, Flex, Heading } from '@chakra-ui/react'

// Components
import Button from '@components/Button'
import CardProduct from '@components/CardProduct'
import Search from '@components/Search'

// Mocks
import { LIST_PRODUCT } from '@mocks/mockData'

// Types
import { IProduct } from '@self-types/index'

const Home = () => {
  // TODO:
  // - Replace mocks data with fetched data, will be done in integration step
  const products: IProduct[] = LIST_PRODUCT

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
  const handleLoadMore = () => {
    // Handle load
  }

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
        <Flex flexDirection="column" justifyContent="center">
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
      </Flex>
    </Box>
  )
}

export default Home
