
import "../../../assets/css/utils/course/SectionHeader.css"

export default function SectionHeader(){

    return(
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
    )
}