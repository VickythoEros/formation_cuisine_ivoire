import { useEffect } from "react";
import NavbarApp from "../components/generics/NavbarApp";

import { Player,BigPlayButton  } from 'video-react';
import "video-react/dist/video-react.css"; 
import '../assets/template/css/app.css'
import Navbar from "../components/utils/tutoriels/Navbar";
import Sidebar from "../components/utils/tutoriels/Sidebar";

export default function Tutoriel1(){



    return(
        <>
        <NavbarApp />
        <div className="wrapper">
            <Sidebar />
            <div className="main">
                <Navbar />
                <main className="content">
                    <div className="container-fluid p-0">
                        <div className="row justify-content-start align-items-center">
                            <div className="col-12">
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
                    </div>
                </main>
            </div>
	    </div>
        </>
        )
}