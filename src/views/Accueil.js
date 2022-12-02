import React from 'react'
import { Button,Image,Select,InputGroup,InputLeftElement,Input } from '@chakra-ui/react'
import {Search2Icon } from '@chakra-ui/icons'


import '../assets/css/Accueil.css'
import NavbarApp from '../components/generics/NavbarApp';
import CategorieCard from '../components/cards/Categorie';

import bgChef from "../assets/images/accueil/bg-chef.png"
import riz from "../assets/images/accueil/riz.png"
import foutou from "../assets/images/accueil/foutou.png"
import PlatsCrad from '../components/cards/PlatsCard';
import { useState,useEffect } from 'react';
import { instanceAxios } from '../api/instance';
import { ControlPointDuplicateRounded } from '@mui/icons-material';


const platsList = [
    {
        imageUrl: 'https://recettesdafrique.com/wp-content/uploads/2022/04/Sauce-graine-a-la-queue-de-boeuf.jpg',
        imageAlt: 'Sauce Graine',
        title: 'sauce graine',
        description: 'Du nord au sud, de l’est à l’ouest, elle est appréciée de tous en Côte d’Ivoire. La sauce graine est faite à base de noix de palme cuits et pilés au mortier, dont le jus est extrait et utilisé pour la recette.',
        views: 204,
        rating: 4,
    },
    {
        imageUrl: 'https://recettes.africa/wp-content/uploads/2020/03/sauce-ntro-750x500.jpg',
        imageAlt: 'Sauce N’tro',
        title: 'Sauce N’tro',
        description: 'Attribuée aux seuls peuples de l’ouest, la sauce graine est désormais la plus consommée de tout le pays. Du nord au sud, de l’est à l’ouest, elle est appréciée de tous en Côte d’Ivoire. La sauce graine est faite à base de noix de palme cuits et pilés au mortier, dont le jus est extrait et utilisé pour la recette. ',
        views: "54",
        rating: 3,
    },
    {
        imageUrl: 'https://discover-ivorycoast.com/wp-content/uploads/2019/02/Foutou-Banane-2-1024x683.jpg',
        imageAlt: 'Kabato',
        title: 'Kabato',
        description: "Kabato est un plat originaire du nord de la Côte d'Ivoire,Il est consommé en Côte d'Ivoire généralement par le peuple malinké du nord appelé communément dioula. C'est aussi un mets de référence chez le peuple Sénoufo leur voisin direct.",
        views: 102,
        rating: 5,
    }
]


 export function SelectPlatsContainer() {
  

  
    return (
      <div className='row justify-content-between pb-4' >
        <div className='col-lg-3 col-md-3 col-sm-6 col-11'>
        <Select className='mx-3 my-2 shadow' placeholder='Ethnie' size='lg'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>

        </div>
        <div className='col-lg-3 col-md-3 col-sm-6 col-11'>

        <Select  className='mx-3 my-2 shadow' placeholder='Catégorie plat' size='lg'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-11 col-11'>
        <InputGroup  className='mx-3 my-2 shadow'  size='lg' >
            <InputLeftElement
            pointerEvents='none'
            children={<Search2Icon color='gray.300' />}
            />
            <Input type='tel' placeholder='Rechercher un cours' />
        </InputGroup>
        </div>
       
      </div>
    );
  }


function Accueil() {
    
    const [listcourses , setListCourses] = useState([])

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
        <main className="accueil-main">
            <NavbarApp />
            <section className='banner-accueil'>
                <div className="container">
                    <div className="row justify-content-center align-items-center ">
                        <div className="col-md-8 col-sm-10 col-11 text-center">
                            <h1 >
                              Bienvenue sur la meilleure plateforme de formation culinaire ivoirienne
                            </h1>
                            <p>
                                Retrouvez le plaisir de cuisiner à l'ancienne
                            </p>
                        </div>
                        <div className="row justify-content-center align-items-center pt-md-5">
                            <div className="col-md-8 text-center">
                            <Button
                            className="px-md-5 px-3" colorScheme='orange' size='lg'>
                                Voir la liste des formations
                            </Button>
                            </div>
                           
                        </div>
                       
                    </div>
                </div>
            </section>
            <section className='accueil-liste-cours-section'>
                {/* <div style={{position:'absolute',zIndex:3,right:0,bottom:'-15rem'}} className='col-5 img-bg--contenair'>
                        <Image src={riz} alt="bg-section-container" />
                    </div> */}
                <div className='container py-5'>
                    <div className='row justify-content-start align-items-center'>
                        <div className='col-lg-7 col-md-8 col-sm-10 col-11 text-start'>
                            <h1 className='fw-bolder h1 ' >
                                Les cours les plus appréciés 
                            </h1>
                        </div>
                    </div>
                </div>
                
                {/* <div className="container">
                    
                    <div className='row'>
                        <SelectPlatsContainer />
                    </div>
                </div> */}
                <div className='container'>
                    <div className='row justify-content-evenly align-items-center'>
                       {  listcourses?.map((plat,index)=> <PlatsCrad key={plat.id} platItem={plat} /> ) }
                    </div>
                </div>
            </section>
            <section className='accueil-infos-section py-5'>
                <div className='col-5 '>
                    <Image style={{position:'absolute',right:"0",zIndex:2}} src={foutou} alt="bg-section-container" />
                </div>
                <div className="container py-5">
                    <div className="row justify-content-start align-items-center">
                        <div  className="col-md-7 col-sm-10 col-12">
                            <h1>
                            Le Lorem Ipsum est simplement du faux 
                            </h1>
                            <h2 style={{zIndex:10,position:"relative"}}>
                            texte employé dans la composition et la mise en page avant impression
                            </h2>
                        </div>
                        <div className='col-md-5 col-11 py-5'>
                            <Image style={{zIndex:4,position:'relative'}}  src={bgChef} alt="bg-section-container" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="accueil-categorie-section py-5">
                <div className='col-5 img-bg-categorie-contenair'>
                    <Image src={riz} alt="bg-section-container" />
                </div>
                <div   className='container py-5'>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-7 col-sm-10 col-12 text-center">
                            <h1 style={{zIndex:10,position:"relative"}} >
                            Le Lorem Ipsum est simplement du faux 
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='container py-5'>
                    <div className="row justify-content-evenly ">
                        <CategorieCard />
                        <CategorieCard />
                        <CategorieCard />
                    </div>
                </div>
            </section>
          
        </main>
        )
}


export default Accueil;