import * as React from 'react';
import {SelectPlatsContainer} from "./Accueil";
import NavbarApp from '../components/generics/NavbarApp';
import PlatsCrad from '../components/cards/PlatsCard';


import "../assets/css/Cours.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { instanceAxios } from '../api/instance';

export default function SearchFood(){

    const [listCourses, setListCourses] = useState([])

    // const platsList = [
    //     {
    //         imageUrl: 'https://recettesdafrique.com/wp-content/uploads/2022/04/Sauce-graine-a-la-queue-de-boeuf.jpg',
    //         imageAlt: 'Sauce Graine',
    //         title: 'sauce graine',
    //         description: 'Du nord au sud, de l’est à l’ouest, elle est appréciée de tous en Côte d’Ivoire. La sauce graine est faite à base de noix de palme cuits et pilés au mortier, dont le jus est extrait et utilisé pour la recette.',
    //         views: 204,
    //         rating: 4,
    //     },
    //     {
    //         imageUrl: 'https://recettes.africa/wp-content/uploads/2020/03/sauce-ntro-750x500.jpg',
    //         imageAlt: 'Sauce N’tro',
    //         title: 'Sauce N’tro',
    //         description: 'Attribuée aux seuls peuples de l’ouest, la sauce graine est désormais la plus consommée de tout le pays. Du nord au sud, de l’est à l’ouest, elle est appréciée de tous en Côte d’Ivoire. La sauce graine est faite à base de noix de palme cuits et pilés au mortier, dont le jus est extrait et utilisé pour la recette. ',
    //         views: "54",
    //         rating: 3,
    //     },
    //     {
    //         imageUrl: 'https://discover-ivorycoast.com/wp-content/uploads/2019/02/Foutou-Banane-2-1024x683.jpg',
    //         imageAlt: 'Kabato',
    //         title: 'Kabato',
    //         description: "Kabato est un plat originaire du nord de la Côte d'Ivoire,Il est consommé en Côte d'Ivoire généralement par le peuple malinké du nord appelé communément dioula. C'est aussi un mets de référence chez le peuple Sénoufo leur voisin direct.",
    //         views: 102,
    //         rating: 5,
    //     }
    // ]

    useEffect(()=>{
        let componentIsMounted = true
        const controller = new AbortController()
        
        const getListCourses = async()=>{
            try {
                const response = await instanceAxios.get('/courses',{signal:controller.signal})
                console.log(' data course ',response.data.data)
                componentIsMounted && setListCourses(response.data.data)
            } catch (error) {
                console.error(error)
                controller.abort()
            }
        }

        getListCourses()

        return()=>{
            componentIsMounted = false
            controller.abort()
        }
    },[])

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
                                Rechercher une formation en fonction de vos ingredients
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
                            <p className='fs-3  ms-md-4'  >
                                Vous avez jusqu'à {listCourses?.length} cours disponible
                            </p>
                        </div>
                    </div>
                    
                    <div className='row justify-content-evenly align-items-center'>
                       {  listCourses?.map((plat,index)=> <PlatsCrad key={plat.id} platItem={plat} /> ) }
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