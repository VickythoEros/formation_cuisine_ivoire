

import "../../assets/css/generics/DescriptionComponent.css"




export default function DescriptionComponent({title,content}){


    return(
        <div className="row justify-content-center align-items-center">
        <div className="col-12 description-component rounded" style={{borderLeft:'5px solid green'}} >
            <h2>
               {title}
            </h2>
            <p className="py-3" >
                {content}
            </p>
        </div>
    </div>
    )
}