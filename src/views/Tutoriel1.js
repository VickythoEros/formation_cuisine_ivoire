// import { useEffect } from "react";

import { 
    Button,
    } from "@chakra-ui/react";

import { ArrowForwardIcon,ArrowBackIcon,} from "@chakra-ui/icons";
import { useNavigate, useParams } from 'react-router-dom';
    
import NavbarApp from "../components/generics/NavbarApp";
import Navbar from "../components/utils/tutoriels/Navbar";
import Sidebar from "../components/utils/tutoriels/Sidebar";

import "video-react/dist/video-react.css"; 
import '../assets/template/css/app.css'
import '../assets/css/Tutoriel1.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { instanceAxios } from '../api/instance';
import TutorielStep from './TutorielStep';


export default function Tutoriel1(){
    const {coursId,tutorielId } = useParams()
    const navigate = useNavigate()
    const [coursDetails , setCoursDetails] = useState({})
    const [coursLessons , setCoursLessons] = useState([])
    const [currentLessonS , setCurrentLesson] = useState(tutorielId)
    const [descriptionCours , setDescriptionCours] = useState('')
    const [currentLessonIndex , setCurrentLessonIndex] = useState(0)


    useEffect(()=>{
        let componentIsMounted = true
        const controller = new AbortController()
        
        const getDetailCourse = async()=>{
            try {
                const response = await instanceAxios.get(`/courses/${coursId}?populate=lessons.sections`,{signal:controller.signal})
                console.log(' data course 1',response.data.data.attributes.lessons.data)
                if(componentIsMounted){
                    let listLessons = response.data.data.attributes.lessons.data
                    listLessons.sort((fistLesson, secondLesson) => {
                        return fistLesson.id - secondLesson.id
                    })
                    console.log("🚀 ~ file: Tutoriel1.js:44 ~ getDetailCourse ~ listLessons", listLessons)
                    
                    setCoursLessons(listLessons)
                    setCoursDetails(response.data)
                }
            } catch (error) {
                console.error(error)
            }
        }

        getDetailCourse()

        return()=>{
            componentIsMounted = false
            controller.abort()
        }
    },[])
    console.log("Lessons ", coursLessons)
    return(
        <>
        <NavbarApp />
        <div className="wrapper">
            <Sidebar coursLessons={coursLessons} />
            <div className="main">
                <Navbar />
                <main className="content tutoriel1">
                    
                    {
                        coursLessons.length == 0 ? <h1>Ce cours n'est pas encore garnis. Passez plus tard</h1> : (
                            <TutorielStep id={coursLessons[currentLessonIndex].id} is_first_step={currentLessonIndex == 0} title={coursLessons[currentLessonIndex].attributes.title} description={coursLessons[currentLessonIndex].attributes.description} sections={coursLessons[currentLessonIndex].attributes.sections}  />
                        )
                    }
                    

                    <div className='container'>
                        <div className='d-flex justify-content-evenly aling-items-center py-5'>
                                <Button 
                                onClick={() => setCurrentLessonIndex(prev => prev-1)}
                                disabled={currentLessonIndex == 0}
                                    size='lg'
                                    leftIcon={<ArrowBackIcon />}
                                    colorScheme='green' 
                                    variant='solid'>
                                    Leçon précédente
                                </Button>
                                <Button 
                                    onClick={() => setCurrentLessonIndex(prev => prev+1)}
                                    disabled={currentLessonIndex == coursLessons.length-1}
                                    size='lg'
                                    rightIcon={<ArrowForwardIcon />} 
                                    colorScheme='green'
                                    variant='solid'>
                                    Leçon suivante
                                </Button>
                        </div>
                    </div>
                </main>
            </div>
	    </div>
        </>
        )
}