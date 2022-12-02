import { useEffect,useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {
    FormControl,
    FormLabel,
    Image,
    Button,
    Input,

  } from '@chakra-ui/react'

import {FaFacebook, FaGoogle,} from "react-icons/fa";

import { useToast } from '@chakra-ui/react'
import NavbarApp from "../components/generics/NavbarApp";
import imgNourriture from "../assets/images/connexion/nourriture.png"
import imgBg3 from "../assets/images/connexion/bg3.jpg"
import '../assets/css/Connexion.css'
import { USER_TOKEN_ITEM } from "../api/constantes";
import { instanceAxios } from "../api/instance";


export default function Connexion(){
    const navigate = useNavigate()
    const toast = useToast()
    const [successful, setSuccessful] = useState(false);
    const [userName,setUserName] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const [loginErrorMsg,setLoginErrorMsg] = useState('')
    const [loginError,setLoginError] = useState(false)

    // const handleEmailChange = (e)=>{
    //     const value = String(e.target.value)
    //     setUserEmail(value.toLowerCase)
    // }
   
    const onSubmit = async( e)=>{
        e.preventDefault();
        setSuccessful(false);
        
        const formData ={
                identifier: userName,
                password :userPassword,
        }
        try {
            const response = await instanceAxios.post('/auth/local',formData)
                console.log(response)
                if(response.status === 200){
                    setSuccessful(true)
                    localStorage.setItem(USER_TOKEN_ITEM,response.data.jwt)
                    navigate('/',{replace:true})
                   
                }
            } catch (error) {
                console.error(error)
                toast({
                    title: "Erreur",
                    description: "Nom d'utilisateur ou Email incorrecte",
                    status: 'error',
                    variant:'top-accent',
                    position:"top",
                    duration: 9000,
                    isClosable: true,
                })
            
        }

        // dispatch(registerUser(formData))
        // .unwrap()
        // .then(() => {
        //     setSuccessful(true);
        // })
        // .catch(() => {
        //     setSuccessful(false);
        // });
    }

    if(localStorage.getItem(USER_TOKEN_ITEM)){
       return <Navigate to="/" replace={true} />
    }

    return(
        < main className="connexion-main">
            <NavbarApp />
            <section className="connexion-section">
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center ">
                        <div className="col-lg-4 col-md-8 col-sm-11 col-11">
                        <div className="connexion-form-content rounded shadow p-5 bg-white mx-auto ">
                            <h2  style={{color:'green'}}   className="text-center pb-4">Connexion</h2>
                            <Image
                                    className='mx-auto text-center'
                                    borderRadius='full'
                                    boxSize='150px'
                                    src={imgNourriture}
                                    alt='login icon'
                                    />
                            <form onSubmit={onSubmit} >
                                <FormControl isRequired className='py-3' >
                                    <FormLabel>Entrer nom d'utilisateur</FormLabel>
                                    <Input value={userName} onChange={e=>setUserName(e.target.value)} type='text' />
                                </FormControl>
                                <FormControl isRequired className='py-3' >
                                    <FormLabel>Entrer votre mot de passe</FormLabel>
                                    <Input value={userPassword} onChange={e=>setUserPassword(e.target.value)} type='password' />
                                    <div className="d-flex justify-content-between pt-2">
                                        <Link className='text-secondary d-block'  to="/get_password">Mot de passe oublié ?</Link>
                                        <Link className='text-success d-block text-decoration-none'  to="/inscription">je n'ai pas de Compte </Link>
                                    </div>
                                </FormControl>
                                <div className='row pb-5 pt-3'>
                                    <Button type="submit" colorScheme='green' variant='outline' size='md'>
                                        Connexion
                                    </Button>
                                </div>
                            </form>
                            <p className='fw-bolder text-center' >Ou</p>
                            <div className='d-flex justify-content-between align-items-center pt-4'>
                            <Button colorScheme='red' leftIcon={<FaGoogle />}>
                                Google
                            </Button>
                            <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
                                Facebook
                            </Button>
                          
                            </div>
                           
                        </div>
                        </div>
                       <div className='col-lg-8 d-md-none d-lg-block d-none '>
                       <Image
                                    className='mx-auto text-center'
                                    src={imgBg3}
                                    alt='login icon'
                                    />
                       </div>
                    </div>
                </div>
            </section>
        </main>
        )
}