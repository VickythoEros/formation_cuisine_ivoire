import * as React from 'react';
import {SelectPlatsContainer} from "./Accueil";
import NavbarApp from '../components/generics/NavbarApp';
import PlatsCrad from '../components/cards/PlatsCard';


import "../assets/css/Cours.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { instanceAxios } from '../api/instance';
import CourseCard from '../components/cards/CourseCard';

export default function Cours(){

    const [listCourses, setListCourses] = useState([])

    useEffect(()=>{
        let componentIsMounted = true
        const controller = new AbortController()
        
        const getListCourses = async()=>{
            try {
                const response = await instanceAxios.get('/courses?populate=*',{signal:controller.signal})
                console.log(' data course ',response.data.data)
                componentIsMounted && setListCourses(response.data.data)
            } catch (error) {
                console.error(error)
                controller.abort()
            }
        }

        getListCourses()

        return()=>{
            componentIsMounted = false
            controller.abort()
        }
    },[])

    return(
        <main className="cours-main-container" >
            <NavbarApp />
            <section className='cours-liste-cours-section'>
                {/* <div style={{position:'absolute',zIndex:3,right:0,bottom:'-15rem'}} className='col-5 img-bg--contenair'>
                        <Image src={riz} alt="bg-section-container" />
                    </div> */} 
                <div className='container py-5'>
                    <div className='row justify-content-start align-items-center'>
                        <div className='col-lg-10 col-md-10 col-sm-10 col-12 text-start'>
                            <h1>
                                Liste des formations
                            </h1>
                        </div>
                    </div>
                </div>
                
                <div className="container">
                    
                    <div className='row'>
                        <SelectPlatsContainer />
                    </div>
                </div>
                <div className='container'>
                    <div className='row justify-content-start'>
                        <div className='col-11'>
                            <p className='fs-3  ms-md-4'  >
                                Vous avez jusqu'à {listCourses?.length} cours disponible
                            </p>
                        </div>
                    </div>
                    
                    <div className='row justify-content-evenly align-items-center'>
                       {  listCourses?.map((plat,index)=> {
                        console.log("send ", plat)
                        return (
                            <CourseCard {...plat} 
                                key={plat.id}  
                                id={plat.id} 
                                is_followed={false}
                                image={plat.attributes.image}   />
                        )
                       } ) }
                    </div>
                  
                    <div className="row ">
                        <div className='col-md-8 col-12'>
                           {/* pagination content */}
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
    )
}