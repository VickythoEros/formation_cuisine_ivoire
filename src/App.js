import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { appRoutes } from './router';




const router = createBrowserRouter(
    appRoutes,
    {
      basename:'/'
  }
  );

function App() {
  return( 
   <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
  )
}

export default App;
