import { ApolloProvider } from '@apollo/client'
import type { FunctionComponent } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { client } from './lib/apollo'

import { Router } from './Router'

const App: FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
