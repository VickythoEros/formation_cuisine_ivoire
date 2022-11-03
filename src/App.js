import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
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
    <ProSidebarProvider>
      <RouterProvider router={router} />
    </ProSidebarProvider>
  </ChakraProvider>
  )
}

export default App;
