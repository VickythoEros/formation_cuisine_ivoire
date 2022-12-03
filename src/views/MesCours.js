import { 
    Image,
    Button, 
    Heading
    } from "@chakra-ui/react";
import {ArrowForwardIcon, } from "@chakra-ui/icons"
import { useState,useEffect } from 'react';

import NavbarApp from "../components/generics/NavbarApp";
import SectionHeader from '../components/utils/course/SectionHeader';
import SectionCourseLessonList from '../components/utils/course/SectionCourseLessonList';

import "../assets/css/CoursDetails.css"
import MessageComponent from "../components/generics/MessageComponent";
import DescriptionComponent from "../components/generics/DescriptionComponent";
import { useNavigate, useParams } from "react-router-dom";
import { instanceAxios } from "../api/instance";
import { BASE_URL_FILE } from "../api/constantes";
import { authHeader } from "../services/authHeader";

import {SelectPlatsContainer} from "./Accueil";
import PlatsCrad from '../components/cards/PlatsCard';
import CourseCard from '../components/cards/CourseCard';

export default function (){

    const [listCourses, setListCourses] = useState([])
    const [me , setMe] = useState({})

    useEffect(()=>{
        let componentIsMounted = true
        const controller = new AbortController()

        instanceAxios.get(`/users/me?populate=courses.image`, {
            headers: authHeader()
        }).then(async ({data}) => {

            setMe(data)
            setListCourses(data.courses)
            console.log("Mes coursessss ", data.courses)
        })
        
       
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
                                Mes cours
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
                        
                    </div>
                    
                    <div className='row justify-content-evenly align-items-center'>
                       {  listCourses.length == 0 ? <Heading size='md'>Aucun cours</Heading> : listCourses.map((plat,index)=> {
                        console.log("Putting ", plat)
                        return <CourseCard {...{attributes: plat}}  
                            key={plat.id} 
                            id={plat.id} 
                            is_followed={true}
                            image={{data: { attributes: plat.image }}} />
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


