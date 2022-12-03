import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import { USER_TOKEN_ITEM } from '../../api/constantes';
import "../../assets/css/generics/NavbarApp.css"


function NavbarApp() {
  const location =  useLocation()
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const location_path = location.pathname ==="/"
    const [bgColor,setBgColor] = useState(location_path ? "":"kz-bg-primary")
    const [textColor,setTextColor] = useState(location_path ? "text-white":"kz-text-color")
    const [textBrandColor,setTextBrandColor] = useState('text-white')

    useEffect(()=>{
        const handleScroll = e=>{
          if(location_path ){
            if(window.scrollY > 200 ){
              setBgColor('kz-bg-primary')
              setTextColor('kz-text-color')
              setTextBrandColor('text-dark')
            }else{
              setBgColor('')
              setTextColor('text-white')
              setTextBrandColor('text-white')
            }
          }else{
            
            setBgColor('kz-bg-primary')
            setTextColor('kz-text-color')
            setTextBrandColor('text-dark')
          }
            
        }

        handleScroll()
        window.addEventListener("scroll",handleScroll)

        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])


    useEffect(()=>{
      localStorage.getItem(USER_TOKEN_ITEM) && setIsLoggedIn(true)
    },[localStorage.getItem(USER_TOKEN_ITEM)])

  return (
    <>
        <Navbar expand="md" className={`${location_path?  "fixed-top": "shadow"} py-md-4 py-3 ${bgColor} `}>
          <Container >
            <Navbar.Brand className={`fw-bolder text-uppercase ${textBrandColor} `} href="/">Quizzine</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-dm`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 navbar-app-nav">
                  <Link className={`mx-md-5 text-decoration-none ${textColor} `} to="/">
                    Accueil
                  </Link>
                 
                  <Link className={`mx-md-5 text-decoration-none ${textColor} `}  to="/cours">
                    Cours
                  </Link>
                  <Link className={`mx-md-5 text-decoration-none ${textColor} `}  to="/search_food">
                    Recommendations
                  </Link>
                  { !!!isLoggedIn ?
                 (<>
                   <Link className={`mx-md-5 text-decoration-none ${textColor} `}  to="/connexion">
                    Connexion
                  </Link>
                  <Link className={`mx-md-5 text-decoration-none ${textColor} `}  to="/inscription">
                    Inscription
                  </Link>
                  </>):(
                  <>
                  <Link className={`mx-md-5 text-decoration-none ${textColor} `}  to="/mes_cours">
                   Mes cours
                 </Link>
                  <Link className={`mx-md-5 text-decoration-none ${textColor} `}  to="/mon_profil">
                   Mon profil
                 </Link>

                  </>)
                  }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  );
}

export default NavbarApp;