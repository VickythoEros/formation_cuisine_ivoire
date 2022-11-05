// import { useEffect } from "react";
import { Player,BigPlayButton  } from 'video-react';
import { 
    Button,
    } from "@chakra-ui/react";

import { ArrowForwardIcon,ArrowBackIcon,} from "@chakra-ui/icons";
    
import NavbarApp from "../components/generics/NavbarApp";
import Navbar from "../components/utils/tutoriels/Navbar";
import Sidebar from "../components/utils/tutoriels/Sidebar";
import DescriptionComponent from "../components/generics/DescriptionComponent";
import MessageComponent from "../components/generics/MessageComponent";
import { contentDescription, messagesItems } from "./CoursDetails";

import "video-react/dist/video-react.css"; 
import '../assets/template/css/app.css'
import '../assets/css/Tutoriel1.css'


export default function Tutoriel1(){



    return(
        <>
        <NavbarApp />
        <div className="wrapper">
            <Sidebar />
            <div className="main">
                <Navbar />
                <main className="content tutoriel1">
                    <div className="container">
                        <div className="row justify-content-start align-items-center">
                            <div className="col-12 tutoriel1-header-title">
                                <h3 className="fw-bolder" >
                                    Titre de la leçon en cours de lecture
                                </h3>
                                <p>Sous titre du cours</p>
                            </div>
                        </div>
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-10 py-4 col-12">
                            <Player
                                playsInline
                                poster="https://media.istockphoto.com/photos/caribbean-lamb-and-sweet-potato-curry-picture-id162980784?k=20&m=162980784&s=612x612&w=0&h=pl8lLJDKy2yhsMGwNn-j_tbpdNorgsDfGbOQ05Kxyqw="
                                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                            >
                               
                                <BigPlayButton position="center" />
                            </Player>
                            </div>
                        </div>

                         {/*  Description du contenu */}
                        <DescriptionComponent title="Description du contenu" content={contentDescription} />

                        {/*  Objectifs pédagogiques du cours */}
                        <MessageComponent type="success" items={messagesItems} header='Objectifs pédagogiques du cours' />

                        {/*  Prérequis pour ce cours */}
                        <MessageComponent type="info" items={messagesItems} header='Prérequis pour ce cours' />

                        <div className='d-flex justify-content-evenly aling-items-center py-5'>
                                <Button 
                                    size='lg'
                                    leftIcon={<ArrowBackIcon />}
                                    colorScheme='green' 
                                    variant='solid'>
                                    Leçon précédente
                                </Button>
                                <Button 
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