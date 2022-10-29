import Message  from 'rsuite/Message';
import { 
    Image,
    ListItem,
    UnorderedList,
    Button, 
    } from "@chakra-ui/react";
import NavbarApp from "../components/generics/NavbarApp";

import {ArrowForwardIcon, } from "@chakra-ui/icons"
// import foutou from "../assets/images/accueil/foutou.png"

// import sauce_header from "../assets/images/cours_details/sauce_arrachide.jpg"


import "../assets/css/CoursDetails.css"
import SectionHeader from '../components/utils/course/SectionHeader';
import SectionCourseLessonList from '../components/utils/course/SectionCourseLessonList';


  



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
                                Le Lorem Ipsum est simplement 
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
                            <Image className="shadow rounded" src={`https://villamaasai.fr/wp-content/uploads/2019/07/Poisson_Sauce_claire.jpeg`} alt="bg-section-container" />
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 description-contenu-cours">
                            <h2>
                                Description du contenu
                            </h2>
                            <p className="py-3" >
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
  
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center align-items-center description-objectifs-cours py-md-3 py-4">
                        <div className="col-12">
                            <Message showIcon type="info" header={<p style={{fontSize:"18px",fontWeight:"bold"}} >
                                Objectifs pédagogiques du cours
                            </p> } >
                                <UnorderedList className="py-3 ps-md-5 ps-sm-3 ps-0">
                                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                                    <ListItem>Consectetur adipiscing elit</ListItem>
                                    <ListItem>Integer molestie lorem at massa</ListItem>
                                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                                </UnorderedList>
                            </Message>
                           
                        </div>
                    </div>
                    
                    <div className="row justify-content-center align-items-center description-prerequis py-md-4 py-4">
                        <div className="col-12">
                            <Message showIcon type="warning" header={<p style={{fontSize:"18px",fontWeight:"bold"}} >
                                Prérequis
                            </p> } >
                                <UnorderedList className="py-3 ps-md-5 ps-sm-3 ps-0">
                                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                                    <ListItem>Consectetur adipiscing elit</ListItem>
                                    <ListItem>Integer molestie lorem at massa</ListItem>
                                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                                </UnorderedList>
                            </Message>
                           
                        </div>
                    </div>
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


