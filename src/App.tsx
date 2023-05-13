import { QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider, DarkMode, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import { Home } from '@pages'
import queryClient from './services/utils/query'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: Record<string, unknown>) => ({
      body: {
        bg: mode('gray.900', 'white')(props),
        color: mode('white', 'gray.900')(props),
      },
    }),
  },
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <DarkMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </DarkMode>
    </ChakraProvider>
  </QueryClientProvider>
)

export default App
