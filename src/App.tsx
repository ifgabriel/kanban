import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@pages'
import queryClient from './services/utils/query'

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </QueryClientProvider>
)

export default App
