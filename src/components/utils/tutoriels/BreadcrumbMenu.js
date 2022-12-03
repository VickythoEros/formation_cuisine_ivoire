import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'
  import { ChevronRightIcon } from '@chakra-ui/icons'


const BreadcrumbMenu = ({courseId,currentLessonIndex})=>{

    return( <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
         <BreadcrumbItem>
             <BreadcrumbLink href='/' className="fw-bold" >Accueil</BreadcrumbLink>
         </BreadcrumbItem>
 
         <BreadcrumbItem>
             <BreadcrumbLink href={`/cours/${courseId}`} className="fw-bold">Cours</BreadcrumbLink>
         </BreadcrumbItem>
 
         <BreadcrumbItem isCurrentPage>
             <BreadcrumbLink href={`/cours/${courseId}/${currentLessonIndex}`} className="fw-bold">Leçon {currentLessonIndex+1} </BreadcrumbLink>
         </BreadcrumbItem>
     </Breadcrumb>)
 }
 

 export default BreadcrumbMenu;