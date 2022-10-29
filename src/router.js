import Accueil from "./views/Accueil";
import Cours from "./views/Cours";
import CoursDetails from "./views/CoursDetails";
import ErrorPage from "./views/ErrorPage";
import Tutoriel from "./views/Tutoriel";




const appRoutes = [
    {
        path:"/",
        element: <Accueil />,
        errorElement: <ErrorPage />,
        // loader: donnée à charger sur la page
        // children:{
        //     path:"/cours",
        //     element:<Cours />,
        //     // loader:
        // }
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
    }
]

export {appRoutes};