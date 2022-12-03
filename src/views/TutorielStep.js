
import { useEffect, useState } from 'react';
import { Player,BigPlayButton  } from 'video-react';
import { instanceAxios } from '../api/instance';
import DescriptionComponent from "../components/generics/DescriptionComponent";
import InfoSection from '../components/generics/InfoSection';
import MessageComponent from "../components/generics/MessageComponent";
import Quiz from '../components/utils/Quiz';
import { contentDescription, messagesItems } from "./CoursDetails";

const TutorielStep = ({is_first_step = true, id, title, description= 'Nono', sections= {data: []}})=>{
    const [lesson, setLesson] = useState({})

    // useEffect(()=> {
    //     const controller = new AbortController()
        
    //         instanceAxios.get(`/lessons/${id}?populate=sections`,{signal:controller.signal})
    //         .then(({data}) => {
    //             setLesson(data.data.attributes)
    //             console.log("Response", lesson)
    //         })
    //         .catch((err) => console.log("Rerererr", err.msg))
            
        
        
    //     return()=>{
    //         controller.abort()        }
    // }, [])

    return(
        <div className="container">
        <div className="row justify-content-start align-items-center">
            <div className="col-12 tutoriel1-header-title">
                <h3 className="fw-bolder" >
                    {lesson.title || title}
                </h3>
                <p>{lesson.description || description}</p>
            </div>
        </div>
        <div className="row justify-content-center align-items-center mt-4 mb-5 ">
            <div className="col-md-10  col-12 shadow rounded bg-white p-2">
            <Player
                playsInline
                poster="https://recettesdafrique.com/wp-content/uploads/2022/04/Sauce-graine-a-la-queue-de-boeuf.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
                <BigPlayButton position="center" />
            </Player>
            </div>
        </div>

        {/* {
            is_first_step && (
                <>
                    <DescriptionComponent title="Description du contenu" content={contentDescription} />

                    <MessageComponent type="success" items={messagesItems} header='Objectifs pédagogiques du cours' />

                    <MessageComponent type="info" items={messagesItems} header='Prérequis pour ce cours' />
                </>
            ) 
        } */}

        {

        sections.data.map( ({attributes: section}) =>{ 
            if(  section.description === 'Objectif pédagoqiue de la leçon'){
                return   <MessageComponent type="success" items={messagesItems} header='Objectifs pédagogiques du cours' />
            }
           return <InfoSection title={section.title} description={section.description} />
        } )
        }


       <div className='py-5'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-12'>
                        <h2  className='fw-bolder h2' >
                            Vérifiez vos connaissances
                        </h2>
                    </div>
                </div>
            </div>
            <Quiz title={""}  />
            <Quiz title={""}  />
       </div>
       
    </div>
    )
}

export default TutorielStep