import { Spinner } from '@chakra-ui/react'
import Accueil from "./views/Accueil";
import Connexion from "./views/Connexion";
import Cours from "./views/Cours";
import CoursDetails from "./views/CoursDetails";
import ErrorPage from "./views/ErrorPage";
import Inscription from "./views/Inscription";
import Tutoriel from "./views/Tutoriel";
import Tutoriel1 from "./views/Tutoriel1";

<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>

const appRoutes = [
    {
        path:"/",
        element: <Accueil />,
        errorElement: <ErrorPage />,
        // loader: <Spinner />
        // children:{
        //     path:"/cours",
        //     element:<Cours />,
        //     // loader:
        // }
    },
    {
        path:"/connexion",
        element: <Connexion />,
        errorElement: <ErrorPage />,
    },
    {
        path:"/inscription",
        element: <Inscription />,
        errorElement: <ErrorPage />,
    },
    {
        path:"/cours",
        element: <Cours />,
        errorElement: <ErrorPage />,
    },
    {
        path:"/cours/:coursId",
        element: <CoursDetails />,
        errorElement: <ErrorPage />,
    },
    {
        path:"/cours/:coursId/tutoriel",
        element: <Tutoriel />,
        errorElement: <ErrorPage />,
    }, 
    {
        path:"/cours/:coursId/tutoriel1",
        element: <Tutoriel1 />,
        errorElement: <ErrorPage />,

        path:"/cours/:coursId/tutoriel1/:tutorielId",
        element: <Tutoriel1 />,
        errorElement: <ErrorPage />,
    }
]

export {appRoutes};