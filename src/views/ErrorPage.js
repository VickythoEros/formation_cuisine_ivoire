import { useRouteError } from "react-router-dom";

export default function ErrorPage(){

    const error =  useRouteError();
    console.log(error)

    return (
        <div className="container"  >
         <div className="row justify-content-center align-items-center">
          <div className="col-12 text-center">
            <h1>Oops!</h1>
            <p>Désolé, Une erreur est survenué.</p>
            <p className="text-danger" >
              <i>{error.statusText || error.message}</i>
            </p>
          </div>
         </div>
        </div>
      );
}