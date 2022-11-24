// Components
import Products from '@components/Products'

// Constants
import { SERVER_ERROR } from '@constants/index'

// Types
import { IProduct } from '@self-types/index'

// Services
import { fetcherApi } from '@services/index'

export interface SearchPageProps {
  products: IProduct[]
  error?: string
  paramSearch: string
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
        paramSearch: searchValue,
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

const SearchPage = ({ products, error, paramSearch }: SearchPageProps) => {
  return (
    <Products products={products} error={error} paramSearch={paramSearch} />
  )
}

export default SearchPage
