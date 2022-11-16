import { GetStaticProps } from 'next'

// Components
import Products from '@components/Products'

// Types
import { IProduct } from '@self-types/index'

// Constants
import { SERVER_ERROR } from '@constants/index'

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
  return <Products products={products} error={error} />
}

export default Home
