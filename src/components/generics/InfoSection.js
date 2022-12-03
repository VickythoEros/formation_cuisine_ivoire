import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
import { useState,useEffect } from 'react'

import '../../assets/css/generics/InfoSection.css'

export default function InfoSection({image = null,title=null, description=''}){
    const [ustensilesList,setUstensilesList] = useState([])

    useEffect(()=>{
        console.log(title)
        setUstensilesList([])
        if(title === "Les ustensiles " || title === "Les ingrédients "){
            const ustensilesArray = description.split('-')
            setUstensilesList(ustensilesArray)
            console.log("ustensilesArray :",ustensilesArray.slice(0,1))
        }
    },[])
    
    return(
        <div className="row justify-content-center align-items-center info-section-component py-md-3 py-4 mt-3">
            <div className="col-12">
               <h5 className='h5 fw-bolder pb-2'> {title} </h5>
               <div className=''>
                    {
                        ustensilesList?.length >0 ?(
                            <List spacing={3}>
                                {
                                    ustensilesList.map((item,index)=>{
                                        return(
                                            <ListItem key={index} className='d-flex' >
                                                <ListIcon className='fs-3'  color='green.500' />
                                                <p>
                                                    {item}
                                                </p>
                                            </ListItem>
                                        )
                                    })
                                }
                               
                            </List>
                        ):(
                            <p> {description} </p>
                        )
                    }
               </div>
            </div>
        </div>
    )
}