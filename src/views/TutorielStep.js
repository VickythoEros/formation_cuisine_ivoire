
import { useEffect, useState } from 'react';
import { Player,BigPlayButton  } from 'video-react';
import { instanceAxios } from '../api/instance';
import DescriptionComponent from "../components/generics/DescriptionComponent";
import InfoSection from '../components/generics/InfoSection';
import MessageComponent from "../components/generics/MessageComponent";
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
        <div className="row justify-content-center align-items-center">
            <div className="col-md-10 py-4 col-12">
            <Player
                playsInline
                poster="https://recettesdafrique.com/wp-content/uploads/2022/04/Sauce-graine-a-la-queue-de-boeuf.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            >
               
                <BigPlayButton position="center" />
            </Player>
            </div>
        </div>

        {
            is_first_step && (
                <>
                    {/*  Description du contenu */}
                    <DescriptionComponent title="Description du contenu" content={contentDescription} />

                    {/*  Objectifs pédagogiques du cours */}
                    <MessageComponent type="success" items={messagesItems} header='Objectifs pédagogiques du cours' />

                    {/*  Prérequis pour ce cours */}
                    <MessageComponent type="info" items={messagesItems} header='Prérequis pour ce cours' />
                </>
            ) 
        }

        {
        sections.data.map( ({attributes: section}) => <InfoSection title={section.title} description={section.description} /> )
        }
         
       
    </div>
    )
}

export default TutorielStep