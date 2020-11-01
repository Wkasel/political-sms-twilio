
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../utils/data'
import { Transitions } from '../components/Transitions';


function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Transitions timeout={400}>
        <Component {...pageProps} />
      </Transitions>
    </ApolloProvider>
  )
}

export default App