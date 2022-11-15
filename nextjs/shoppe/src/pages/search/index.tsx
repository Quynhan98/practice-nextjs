import { ChangeEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import router from 'next/router'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

// Components
import Button from '@components/Button'
import CardProduct from '@components/CardProduct'
import Search from '@components/Search'

// Constants
import { PRODUCT_NOT_FOUND, SERVER_ERROR } from '@constants/index'

// Hooks
import { useDebounce } from '@hooks/useDebounce'

// Types
import { IProduct } from '@self-types/index'

// Services
import { fetcherApi } from '@services/index'

export interface SearchPageProps {
  products: IProduct[]
  error: string
}

export const getServerSideProps = async ({
  query,
}: {
  query: { param: string }
}) => {
  const searchValue = query.param

  try {
    const products: IProduct[] = await fetcherApi(
      `/products?search=${searchValue}`,
    )

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

const SearchPage = ({ products, error }: SearchPageProps) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const searchTerm = useDebounce(searchValue, 500)

  // Handle change search
  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
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
      router.push(`?param=${searchTerm}`)
    }
  }
  // Handle search when user press submit button
  const handleSubmitSearch = () => {
    if (searchTerm) {
      router.push(`?param=${searchTerm}`)
    } else {
      router.push('/search')
    }
  }

  // Handle click load more button
  const handleClickLoadMore = () => {
    router.push('/')
  }

  const renderContent = useMemo(() => {
    if (error) {
      return (
        <Text variant="warning" size="heading">
          {SERVER_ERROR}
        </Text>
      )
    }

    if (products && products.length === 0) {
      return (
        <>
          <Text variant="primary" size="heading" paddingBottom="50px">
            {PRODUCT_NOT_FOUND}
          </Text>
          <Link
            href="/"
            style={{
              color: 'blue',
              fontSize: 'large',
              display: 'flex',
              alignItems: 'center',
              margin: '0 auto',
              width: '160px',
            }}
          >
            <ArrowBackIcon w={5} h={5} marginRight="5px" />
            Back To Home
          </Link>
        </>
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
          onClick={handleClickLoadMore}
          margin="0 auto"
          variant="primary"
          size="medium"
        >
          Load More
        </Button>
      </>
    )
  }, [error, products])

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

export default SearchPage
