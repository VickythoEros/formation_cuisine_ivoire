import { 
    Image,
    Button, 
    } from "@chakra-ui/react";
import {ArrowForwardIcon, } from "@chakra-ui/icons"

import NavbarApp from "../components/generics/NavbarApp";
import SectionHeader from '../components/utils/course/SectionHeader';
import SectionCourseLessonList from '../components/utils/course/SectionCourseLessonList';

import "../assets/css/CoursDetails.css"
import MessageComponent from "../components/generics/MessageComponent";
import DescriptionComponent from "../components/generics/DescriptionComponent";


  

export const messagesItems=["Lorem ipsum dolor sit amet","Consectetur adipiscing elit","Lorem ipsum dolor sit amet","Facilisis in pretium nisl aliquet"]



export const messagesItemsObjectifs=["Lorem ipsum dolor sit amet","Consectetur adipiscing elit","Lorem ipsum dolor sit amet","Facilisis in pretium nisl aliquet"]

export const contentDescription = " Attribuée aux seuls peuples de l’ouest, la sauce graine est désormais la plus consommée de tout le pays. Du nord au sud, de l’est à l’ouest, elle est appréciée de tous en Côte d’Ivoire. La sauce graine est faite à base de noix de palme cuits et pilés au mortier, dont le jus est extrait et utilisé pour la recette."

export default function CoursDetails(){



    return(
        <main className="cours-details-main pb-5">
            <NavbarApp />

            <SectionHeader />

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
                            <Image className="shadow rounded" src={`https://recettesdafrique.com/wp-content/uploads/2022/04/Sauce-graine-a-la-queue-de-boeuf.jpg`} alt="bg-section-container" />
                        </div>
                    </div>
                   
                    {/*  Description du contenu */}
                    <DescriptionComponent title="Description du contenu" content={contentDescription} />

                    {/*  Objectifs pédagogiques du cours */}
                    <MessageComponent type="success" items={messagesItems} header='Objectifs pédagogiques du cours' />
                    
                    {/*  Prérequis pour ce cours */}
                    <MessageComponent type="info" items={messagesItems} header='Prérequis pour ce cours' />
                  
                    
                    
                </div>
            </section>

            <SectionCourseLessonList />
            

            <section className="cous-detail-btn-section py-5">
                <div className="container">
                    <div className='row justify-content-end'>
                        <div className="col-lg-5 col-md-5 col-sm-7 col-12 text-end">
                        <Button 
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


