import Accueil from "./views/Accueil";
import ErrorPage from "./views/ErrorPage";




const appRoutes = [
    {
        path:"/",
        element: <Accueil />,
        errorElement: <ErrorPage />
        // loader: donnée à charger sur la page
        // children:{
        //     path:,
        //     element:,
        //     loader:
        // }
    }
]

export {appRoutes};