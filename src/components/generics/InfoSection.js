

import { useState } from 'react'
import { useEffect } from 'react'
import '../../assets/css/generics/InfoSection.css'

export default function InfoSection({image = null,title=null, description=''}){
    const [ustensilesList,setUstensilesList] = useState([])

    useEffect(()=>{
        if(title == "Les ustensiles " ) {
            const ustensilesTable = description.split('-')
            setUstensilesList(ustensilesTable)
            console.log('ustensiles ',ustensilesTable)
        }
    },[])

    return(
        <div className="row justify-content-center align-items-center info-section-component py-md-3 py-4 mt-3">
            <div className="col-12">
               <h5 className='h5 fw-bolder pb-2'> {title} </h5>
               <p> {title == "Les ustensiles "&&
                <ul>
                {ustensilesList && ustensilesList.map((ustensile,index)=>{
                    <li key={index} > {ustensile} </li>
               })}
                    
               </ul>} </p>
            </div>
        </div>
    )
}