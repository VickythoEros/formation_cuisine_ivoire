import { 
    Image,
    Button, 
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


  

export const messagesItems=["Pas besoin d'avoir des compétences extraodinaire pour suivre ce cours."]



export const messagesItemsObjectifs=["Au terme de ce  cours, les étudiants et étudiantes auront acquis toutes les connaissances pratiques et théoriques nécessaires pour la preparation de la sauce graine  "]

export const contentDescription = " Attribuée aux seuls peuples de l’ouest, la sauce graine est désormais la plus consommée de tout le pays. Du nord au sud, de l’est à l’ouest, elle est appréciée de tous en Côte d’Ivoire. La sauce graine est faite à base de noix de palme cuits et pilés au mortier, dont le jus est extrait et utilisé pour la recette."

export default function CoursDetails(){
    const navigate = useNavigate()
    const {coursId } = useParams()
    const [coursDetails , setCoursDetails] = useState({})
    const [coursLessons , setCoursLessons] = useState([])
    const [descriptionCours , setDescriptionCours] = useState('')
    const [me , setMe] = useState({})
    

    const onClickStartCourse = ()=>{
        console.log(`Cours (${coursId}) Details`, coursDetails)
        const currentParticipants = coursDetails.data.attributes.participants.data
        const all = currentParticipants.concat([me.id])
        console.log("Me ", me)
        console.log("Participants ids ", all)
        const r = () => {
            console.log("Partics ", all)
        }
        r()
        instanceAxios.put(
            `/courses/${coursId}`,
            {
                data: {
                    participants: all
                }
            },
            {
                headers: authHeader()
                // signal:controller.signal
            }
        )
        .then(({data}) => {
            console.log("Updated data ", data)
            navigate(`/cours/${coursId}/tutoriel1/1`,{replace:true})
        })
        .catch(err => console.error(err.msg, err))

    }

    useEffect(()=>{
        let componentIsMounted = true
        const controller = new AbortController()
        
        const getDetailCourse = async()=>{
            try {
                const response = await instanceAxios.get(`/courses/${coursId}?populate=*`,{headers: authHeader(), signal:controller.signal})
                console.log(' data course 1',response.data.data.attributes.lessons.data)
                if(componentIsMounted){
                    setCoursLessons(response.data.data.attributes.lessons.data)
                    setDescriptionCours(response.data.data.attributes.description)
                    setCoursDetails(response.data)
                }
            } catch (error) {
                console.error(error)
            }
            instanceAxios.get(`/users/me`, {
                headers: authHeader()
            }).then(({data}) => setMe(data))
        }

        getDetailCourse()

        return()=>{
            componentIsMounted = false
            controller.abort()
        }
    },[])

    return(
        <main className="cours-details-main pb-5">
            <NavbarApp />

            <SectionHeader platItem={coursDetails.data} />

            <section className="cours-details-title-section">
               <div className="container">
                    <div className="row justify-content-start align-items-center py-5">
                        <div className="col-lg-10 col-md-10 col-sm-11 col-12">
                            <h1>
                                Tout savoir du contenu de ce cours
                            </h1>
                            <p>
                                Dernière mise à jours : {new Date().toLocaleDateString()} 
                            </p>
                        </div>
                    </div>
               </div>
            </section>

            <section className="cours-details-description-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-7 col-md-8 col-sm-10 col-11 text-center pb-2 pb-md-4 ">
                            <Image className="shadow p-3 rounded"src={`${BASE_URL_FILE}/uploads/sauce_graine_32ad5df3d3.jpg`} alt="bg-section-container" />
                        </div>
                    </div>
                   
                    {/*  Description du contenu */}
                    <DescriptionComponent title="Description du contenu" content={descriptionCours} />

                    {/*  Objectifs pédagogiques du cours */}
                    <MessageComponent type="success" items={messagesItemsObjectifs} header='Objectifs pédagogiques du cours' />
                    
                    {/*  Prérequis pour ce cours */}
                    <MessageComponent type="info" items={messagesItems} header='Prérequis pour ce cours' />
                  
                </div>
            </section>

            <SectionCourseLessonList  coursLessons={coursLessons} />
            

            <section className="cous-detail-btn-section py-5">
                <div className="container">
                    <div className='row justify-content-end'>
                        <div className="col-lg-5 col-md-5 col-sm-7 col-12 text-end">
                        <Button 
                            onClick={onClickStartCourse}
                            className=''
                            rightIcon={<ArrowForwardIcon />}
                            colorScheme='teal' size='lg'>
                            Commencer le cours
                        </Button>
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
        )
}


