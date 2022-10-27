import * as React from 'react';
import {SelectPlatsContainer} from "./Accueil";
import NavbarApp from '../components/NavbarApp';
import PlatsCrad from '../components/cards/PlatsCard';


import "../assets/css/Cours.css"

export default function Cours(){

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
                                Le Lorem Ipsum est simplement du faux 
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
                        <div className='col-11'>
                            <p className='fw-bolder fs-3 text-decoration-underline ms-md-4'  >
                                10 cours
                            </p>
                        </div>
                    </div>
                    <div className='row justify-content-evenly align-items-center'>
                        <PlatsCrad />
                        <PlatsCrad />
                        <PlatsCrad />
                        <PlatsCrad />
                        <PlatsCrad />
                        <PlatsCrad />
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