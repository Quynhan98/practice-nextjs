import type { AppProps } from 'next/app'

// Layouts
import PageLayout from '@layouts/PageLayout'

// Components
import { ErrorBoundary } from '@components/ErrorBoundary'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ErrorBoundary>
  )
}
