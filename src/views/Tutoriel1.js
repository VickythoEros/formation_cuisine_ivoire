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
                                    Introduction au cours
                                </h3>
                                <p>les bases de la préparation</p>
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