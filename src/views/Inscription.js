import {useState}  from "react"
import {
    FormControl,
    FormLabel,
    Image,
    Button,
    Input,

  } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import {FaFacebook, FaGoogle,} from "react-icons/fa";

import NavbarApp from "../components/generics/NavbarApp";
import imgBg3 from "../assets/images/connexion/bg4.jpg"
import '../assets/css/Inscription.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { registerUser } from "../redux/slices/auth";
import { clearMessage } from "../redux/slices/messages";
import { instanceAxios } from "../api/instance";
import { USER_TOKEN_ITEM } from "../api/constantes";

export default function Inscription(){
    const navigate = useNavigate()
    const toast = useToast()
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    
    const [successful, setSuccessful] = useState(false);

    const [userEmail,setUserEmail] = useState('')
    const [userName,setUserName] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const [userPasswordConfirm,setUserPasswordConfirm] = useState('')

    

    const onSubmit = async( e)=>{
        e.preventDefault();
        setSuccessful(false);
        if(userPasswordConfirm !==userPassword){
            toast({
                title: "Erreur",
                description: "Les deux mot de passe ne correspondent pas",
                status: 'error',
                variant:'top-accent',
                position:"top",
                duration: 9000,
                isClosable: true,
              })
        }else{
            const formData ={
                username: userName,
                email:userEmail,
                password :userPassword,
            }
            try {
                const response = await instanceAxios.post('/auth/local/register',formData)
                console.log(response)
                if(response.status === 200){
                    setSuccessful(true)
                    localStorage.setItem(USER_TOKEN_ITEM,response.data.jwt)
                    toast({
                        title: "Succes",
                        description: "Votre compte a été crée avec succes.",
                        status: 'success',
                        variant:'top-accent',
                        position:"top",
                        duration: 9000,
                        isClosable: true,
                    })
                    setTimeout(() => {
                        navigate('/',{replace:true})
                    }, 1000);
                }
            } catch (error) {
                console.error(error)
                toast({
                    title: "Erreur",
                    description: "Une erreur est survenue",
                    status: 'error',
                    variant:'top-accent',
                    position:"top",
                    duration: 9000,
                    isClosable: true,
                })
            }
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


    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);
    
    if(localStorage.getItem(USER_TOKEN_ITEM)){
        return <Navigate to="/" replace={true} />
    }
    return(
        < main className="inscription-main">
            <NavbarApp />
            <section className="inscription-section">
                <div className="container py-5">
                    <div className="row justify-content-center align-items-center ">
                    <div className='col-lg-8 d-md-none d-lg-block d-none'>
                       <Image
                                    className='mx-auto text-center'
                                    src={imgBg3}
                                    alt='login icon'
                                    />
                       </div>
                        <div className="col-lg-4 col-md-8 col-sm-11 col-11">
                        <div className="inscription-form-content rounded shadow p-5 bg-white mx-auto ">
                            <h2 style={{color:'orangered'}}  className="text-center pb-4">Inscription</h2>
                           
                            <form onSubmit={onSubmit}>
                                <FormControl isRequired className='py-2' >
                                    <FormLabel >Entrer votre adresse electronique</FormLabel>
                                    <Input value={userEmail} onChange={e=>setUserEmail(e.target.value)} type='email' />
                                </FormControl> 
                                <FormControl isRequired className='py-2' >
                                    <FormLabel >Nom d'utilisateur</FormLabel>
                                    <Input value={userName} onChange={e=>setUserName(e.target.value)} type='text' />
                                </FormControl>
                                <FormControl isRequired className='py-2' >
                                    <FormLabel >Entrer votre un mot de passe</FormLabel>
                                    <Input value={userPassword} onChange={e=>setUserPassword(e.target.value)} type='password' />
                                </FormControl>
                                <FormControl isRequired className='py-2' >
                                    <FormLabel>Confirmer votre mot de passe</FormLabel>
                                    <Input value={userPasswordConfirm} onChange={e=>setUserPasswordConfirm(e.target.value)} type='password' />
                                    <div className="d-flex justify-content-between pt-2">
                                        <Link className='text-success d-block text-decoration-none'  to="/connexion">j'ai déjà un Compte </Link>
                                    </div>
                                </FormControl>
                                <div className='row pb-5 pt-3'>
                                    <Button type="submit" colorScheme='orange' variant='outline' size='md'>
                                        Inscription
                                    </Button>
                                </div>
                            </form>
                            <p className='fw-bolder text-center' >Ou</p>
                            <div className='d-flex justify-content-between align-items-center pt-4'>
                            <Button colorScheme='red' leftIcon={<FaGoogle />}>
                                Google
                            </Button>
                            <Button type="submit" colorScheme='facebook' leftIcon={<FaFacebook />}>
                                Facebook
                            </Button>
                          
                            </div>
                           
                        </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </main>
        )
}