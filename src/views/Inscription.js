import {useState}  from "react"
import {
    FormControl,
    FormLabel,
    Image,
    Button,
    Input,

  } from '@chakra-ui/react'

  import {FaFacebook, FaGoogle,} from "react-icons/fa";

import NavbarApp from "../components/generics/NavbarApp";
import imgBg3 from "../assets/images/connexion/bg4.jpg"
import '../assets/css/Inscription.css'
import { Link } from 'react-router-dom';

export default function Inscription(){
    const [userEmail,setUserEmail] = useState('')
    const [userNumero,setUserNumero] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const [userPasswordConfirm,setUserPasswordConfirm] = useState('')

    const onSubmit = e=>{
        e.preventDefault();
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
                                    <FormLabel >Entrer votre numéro téléphonique</FormLabel>
                                    <Input value={userNumero} onChange={e=>setUserNumero(e.target.value)} type='text' />
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
                                    <Button colorScheme='orange' variant='outline' size='md'>
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