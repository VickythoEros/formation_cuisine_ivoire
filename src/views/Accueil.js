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
import { useNavigate } from 'react-router-dom';




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
    const navigate =  useNavigate()
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
                            className="px-md-5 px-3" colorScheme='orange' onClick={()=>navigate('/cours',{replace:true})} size='lg'>
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
                            <h1 className='h1' >
                            Ces cours de cuisine en ligne s'adresse aux pros et aux amateurs des plats <span style={{color:'orangered',textDecoration:'underline'}} >Ivoirien</span>. Ils vous permettent de maîtriser facilement les techniques de bases de la cuisson ivoirien.
                            </h1>
                            <h2 style={{zIndex:10,position:"relative"}}>
                            Appren de nouvelles techniques de cuisson de plats ivoirien. 
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
                                Découvrer les secrets des plats ivoirien 
                            </h1>
                            <p>A chaque Ethnie son secret de cuisson</p>
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