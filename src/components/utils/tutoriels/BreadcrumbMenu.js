import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'
  import { ChevronRightIcon } from '@chakra-ui/icons'


const BreadcrumbMenu = ()=>{

    return( <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
         <BreadcrumbItem>
             <BreadcrumbLink href='#' className="fw-bold" >Accueil</BreadcrumbLink>
         </BreadcrumbItem>
 
         <BreadcrumbItem>
             <BreadcrumbLink href='#' className="fw-bold">Cours</BreadcrumbLink>
         </BreadcrumbItem>
 
         <BreadcrumbItem isCurrentPage>
             <BreadcrumbLink href='#' className="fw-bold">Leçon 1</BreadcrumbLink>
         </BreadcrumbItem>
     </Breadcrumb>)
 }
 

 export default BreadcrumbMenu;