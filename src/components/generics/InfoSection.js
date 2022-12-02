

import '../../assets/css/generics/InfoSection.css'

export default function InfoSection({image = null,title=null, description=''}){


    return(
        <div className="row justify-content-center align-items-center info-section-component py-md-3 py-4">
            <div className="col-12">
               <h5 className='h5'> {title} </h5>
               <p> {description} </p>
            </div>
        </div>
    )
}