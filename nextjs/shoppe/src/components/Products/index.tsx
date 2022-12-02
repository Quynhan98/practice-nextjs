import { ChangeEvent, memo, useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Heading,
  Flex,
  Button,
  Text,
  Spinner,
  Grid,
} from '@chakra-ui/react'

// Components
import Search from '@components/Search'
import CardProduct from '@components/CardProduct'

// Hooks
import { useDebounce } from '@hooks/useDebounce'
import { usePagination } from '@hooks/usePagination'

// Constants
import { SERVER_ERROR, PRODUCT_NOT_FOUND } from '@constants/index'

// Types
import { IProduct } from '@self-types/index'

interface ProductsProps {
  products?: IProduct[]
  error?: string
  paramSearch?: string
}
const Products = ({ products, error, paramSearch }: ProductsProps) => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')
  const searchTerm = useDebounce(searchValue, 100)

  const {
    paginatedData,
    size,
    setSize,
    error: paginationError,
    isLoadingMore,
    isReachingEnd,
  } = usePagination<IProduct[]>(
    paramSearch ? `/products?search=${paramSearch}&` : '/products?',
  )

  const listProduct = useMemo(() => {
    if (
      !paginatedData ||
      (paginatedData && products && paginatedData.length === products.length)
    ) {
      return products
    }
    return paginatedData
  }, [paginatedData, products])

  // Handle load more
  const handleLoadMore = useCallback(() => {
    setSize(size + 1)
  }, [setSize, size])

  // Handle change search
  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const inputSearchValue = e.target.value

    if (inputSearchValue) {
      setSearchValue(inputSearchValue)
    } else {
      router.push('/')
    }
  }

  // Handle search when user press enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchTerm && e.key === 'Enter') {
      router.push(`/search?param=${searchTerm}`)
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

  const renderContent = useMemo(() => {
    if (error || paginationError) {
      return (
        <Text variant="warning" size="heading">
          {SERVER_ERROR}
        </Text>
      )
    }

    if (listProduct && listProduct.length === 0) {
      return (
        <Text variant="primary" size="heading">
          {PRODUCT_NOT_FOUND}
        </Text>
      )
    }

    if (!listProduct) {
      return <Spinner />
    }

    return (
      <>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
          gap="24px"
          paddingBottom="60px"
        >
          {listProduct.map((product) => (
            <CardProduct key={`product-${product.id}`} {...product} />
          ))}
        </Grid>
        {listProduct.length >= 6 && (
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
        )}
      </>
    )
  }, [error, isLoadingMore, isReachingEnd, listProduct, paginationError])

  return (
    <Box pt={{ base: '10px', md: '96px' }}>
      <Heading
        display={{ base: 'none', md: 'block' }}
        as="h2"
        fontSize="large"
        fontWeight="medium"
      >
        Shop The Latest
      </Heading>
      <Flex
        pt={{ base: '0px', md: '40px' }}
        gap={{ base: '16px', lg: '35px' }}
        justifyContent="space-between"
        flexDirection={{ base: 'column', lg: 'unset' }}
      >
        <Box minW="261px">
          <Search
            onChange={handleChangeSearch}
            onKeyDown={handleKeyDown}
            onClick={handleSubmitSearch}
            placeholder="Search..."
            defaultValue={paramSearch}
          />
          <Heading
            as="h2"
            display={{ base: 'block', md: 'none' }}
            pt="24px"
            pb="15px"
            fontSize="medium"
            fontWeight="medium"
          >
            Shop
          </Heading>
        </Box>
        <Flex flexDirection="column" paddingBottom="50px" margin="0 auto">
          {renderContent}
        </Flex>
      </Flex>
    </Box>
  )
}

export default memo(Products)
