import { Component } from 'react'
import Link from 'next/link'
import { Box, Heading } from '@chakra-ui/react'

// Constants
import { SERVER_ERROR } from '@constants/errorMessage'

interface State {
  error: Error | null
}
interface Props {
  children: JSX.Element[] | JSX.Element
}
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null }
  }

  componentDidCatch(error: Error) {
    this.setState({
      error,
    })
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if (error) {
      return (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          minH="100vh"
          paddingBottom="200px"
        >
          <Heading as="h2" color="warning" paddingBottom="50px">
            {SERVER_ERROR}
          </Heading>
          <Link href="/" style={{ fontSize: 'large', color: 'blue' }}>
            Back To Home
          </Link>
        </Box>
      )
    }

    return children
  }
}
