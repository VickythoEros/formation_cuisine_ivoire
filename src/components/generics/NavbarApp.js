import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import "../../assets/css/generics/NavbarApp.css"


function NavbarApp() {
  const location =  useLocation()
  const location_path = location.pathname ==="/"
    const [bgColor,setBgColor] = useState(location_path ? "":"kz-bg-primary")
    const [textColor,setTextColor] = useState(location_path ? "text-dark":"kz-text-color")

    useEffect(()=>{
        const handleScroll = e=>{
          if(location_path ){
            if(window.scrollY > 200 ){
              setBgColor('kz-bg-primary')
              setTextColor('kz-text-color')
            }else{
              setBgColor('')
              setTextColor('text-dark')
            }
          }else{
            
            setBgColor('kz-bg-primary')
            setTextColor('kz-text-color')
          }
            
        }

        window.addEventListener("scroll",handleScroll)

        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])

  return (
    <>
        <Navbar expand="md" className={`${location_path?  "fixed-top": "shadow"} py-md-4 py-3 ${bgColor} `}>
          <Container >
            <Navbar.Brand className="fw-bolder text-uppercase" href="/">Cuisine-Formation</Navbar.Brand>
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
                  <Link className={`mx-md-5 text-decoration-none ${textColor} `}  to="/connexion">
                    Connexion
                  </Link>
                  <Link className={`mx-md-5 text-decoration-none ${textColor} `}  to="/inscription">
                    Inscription
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  );
}

export default NavbarApp;