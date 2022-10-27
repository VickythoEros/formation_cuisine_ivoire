import { Image } from "@chakra-ui/react";
import NavbarApp from "../components/NavbarApp";
import foutou from "../assets/images/accueil/foutou.png"

import sauce_header from "../assets/images/cours_details/sauce_arrachide.jpg"

import "../assets/css/CoursDetails.css"

export default function CoursDetails(){



    return(
        <main className="cours-details-main">
            <NavbarApp />
            <section className="cours-details-header-section py-3">
                <div className="container"> 
                    <div className="row justify-content-start align-items-center py-5">
                        <div className="col-lg-10 col-md-10 col-sm-11 col-12">
                            <h1>
                            Le Lorem Ipsum est simplement du faux 
                            </h1>
                        </div>
                    </div>
                    <div className="row justify-content-start align-items-center">
                        <div className="col-md-6 py-2">
                            <div className="d-flex justify-content-between ">
                                <p>
                                <i className="fa-solid fa-signal"></i> Dificile
                                </p>
                                <p>
                                    <i className="fa-regular fa-clock "></i> 2 Heures
                                </p>
                                
                                <p>
                                    <i class="fa-solid fa-user-graduate"></i> 10 Apprenants
                                </p>
                           
                            </div>
                        </div>
                     
                    </div>

                </div>
            </section>

            <section className="cours-details-title-section">
               <div className="container">
                    <div className="row justify-content-start align-items-center py-5">
                        <div className="col-lg-10 col-md-10 col-sm-11 col-12">
                            <h1>
                            Le Lorem Ipsum est simplement 
                            </h1>
                        </div>
                    </div>
               </div>
            </section>

            <section className="cours-details-description-section">
                <div className="container">
                    <div className="row justify-content-evenly align-items-center">
                        <div className="col-6">
                             <p>
                             qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
 
                             </p>
                        </div>
                        <div className="col-6 ">
                            <Image src={foutou} alt="bg-section-container" />
                        </div>
                    </div>
                </div>
            </section>


        </main>
        )
}