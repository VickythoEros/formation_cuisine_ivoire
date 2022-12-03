import * as React from 'react';
import {SelectPlatsContainer} from "./Accueil";
import NavbarApp from '../components/generics/NavbarApp';
import PlatsCrad from '../components/cards/PlatsCard';


import "../assets/css/Cours.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { instanceAxios } from '../api/instance';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Button } from '@chakra-ui/react';
import queryString from 'query-string';
import FoodCard from '../components/cards/FoodCard';

const animatedComponents = makeAnimated();

export default function SearchFood(){

    const [listCourses, setListCourses] = useState([])
    const [listIngredients, setListIngredients] = useState([])
    const [listFoods, setListFoods] = useState([])
    const [selected, setSelected] = useState([])

    const [foundFoods, setFoundFoods] = useState([])

    const search = () => {

        // params: {
        //     'filters[ingredients][id][$in]': '[1]'
        // },

        console.log(selected)
        const url = `/foods?${queryString.stringify({
            '': selected.map(i => i.value)
        })}`
        
        instanceAxios.get('/foods',{
            params: {
                'filters[ingredients][id][$in]': selected.map(i => i.value),
                populate: ['image', 'courses']
            },
            // signal:controller.signal
        })
        .then(({data}) => {
            console.log(data.data)
            setFoundFoods(data.data)
        })
        .catch(err => console.warn("ERRROR ", err.msg, err))

        // instanceAxios.get()
        // .then(({data}) => {
        //     console.log(data.data)
        // })
        // .catch(err => console.warn("ERRROR ", err.msg, err))

        // instanceAxios.get(url)
        // .then(({data}) => {
        //     console.log(data.data)
        // })
        // .catch(err => console.warn("ERRROR ", err.msg, err))
    }

    useEffect(()=>{
        let componentIsMounted = true
        const controller = new AbortController()
        
        const getListCourses = async()=>{
            // try {
                const responseIngredients = await instanceAxios.get('/ingredients',{signal:controller.signal})
                console.log(' response ingredients ',responseIngredients.data.data)
                componentIsMounted && setListIngredients(responseIngredients.data.data.map(
                    item => ({label: item.attributes.name, value: item.id})
                ))

                const responseCourses = await instanceAxios.get('/courses',{signal:controller.signal})
                console.log(' resônse course ',responseCourses.data.data)
                componentIsMounted && setListCourses(responseCourses.data.data)
            // } catch (error) {
            //     console.error(error)
            //     controller.abort()
            // }
        }
        console.log("USEEFFECT")
        getListCourses()
        console.log("Side effect done")
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
                        {/* <SelectPlatsContainer /> */}
                        <div className='col'>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                // defaultValue={[{label: 'Agro', value: 0}, {label: 'Chantille', value: 1}]}
                                isMulti
                                options={listIngredients}
                                value={selected}
                                onChange={(value, ) => setSelected(value.map(item => item))}
                                // onChange={(value, opt) => console(value)}
                                />
                        </div>
                        <div className='col-1'>
                            <Button disabled={selected.length == 0} onClick={search} >Demander</Button>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row justify-content-start'>
                        <div className='col-11'>
                            {
                                foundFoods.length && (
                                    <p className='fs-3  ms-md-4'  >
                                        Plats suggérés : {foundFoods.length}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                    
                    <div className='row justify-content-evenly align-items-center'>
                       {  foundFoods?.map((plat,index)=> <FoodCard id={plat.id} {...plat.attributes} /> ) }
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