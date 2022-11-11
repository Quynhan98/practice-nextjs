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

// Constants
import { PRODUCT_NOT_FOUND, SERVER_ERROR } from '@constants/errorMessage'

const Home = () => {
  const router = useRouter()
  const { search } = router.query as {
    search: string
  }

  const {
    paginatedData: products,
    size,
    setSize,
    error,
    isEmpty,
    isLoadingMore,
  } = usePagination<IProduct[]>(
    search ? `/products?search=${search}&` : '/products?',
  )

  const [valueSearch, setValueSearch] = useState<string>('')

  // Handle change search
  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    if (searchValue) {
      setValueSearch(searchValue)
    } else {
      router.push('/')
    }
  }

  // Handle search when user press enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (valueSearch !== '' && valueSearch !== undefined) {
      if (e.key === 'Enter') {
        router.push(`?search=${valueSearch}`)
      }
    } else {
      router.push('/')
    }
  }

  // Handle search when user press submit button
  const handleSubmitSearch = () => {
    if (valueSearch !== '' && valueSearch !== undefined) {
      router.push(`?search=${valueSearch}`)
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
        <Text variant="primary" size="heading">
          {SERVER_ERROR}
        </Text>
      )
    }

    if (!products) {
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
          {products.map((product) => (
            <CardProduct key={`product-${product.id}`} product={product} />
          ))}
        </Flex>
        <Button
          isDisabled={!!search}
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
  }, [error, handleLoadMore, isEmpty, isLoadingMore, products, search])

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
