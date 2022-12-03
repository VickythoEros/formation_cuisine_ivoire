import { Box,Heading,Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BASE_URL_FILE } from '../../api/constantes';


export default function ({ id, image, name, courses, ...plat }) {
  const navigate = useNavigate()
  // const [plat,setPlat] = useState(platItem)
  
  // useEffect(()=>{
  //   setPlat(platItem)
  // },[platItem])
    
    
    return (
      <Box  
        className='my-4 bg-white py-4 px-4 shadow box-cours-container' 
        w={350} borderWidth='1px' borderRadius='lg' overflow='hidden'
        alignItems={'center'}
        justifyItems='center'
        h={450}
        >
          <Box alignItems={'center'} justifyItems='center' flex={1} flexDirection='column' >
            <Image ml={30} height={250} width={250} borderRadius={250} src={`${BASE_URL_FILE}${image && image.data.attributes.url}`} alt={"altern"} />
            <Heading  size='md' >{name}</Heading>
          </Box>
        <Box p='6'>

          <Box
            mt='1'
            mb=""
            fontWeight='bold'
            as='h2'
            fontSize='lg'
            lineHeight='2'
            noOfLines={1}
          >
            {plat?.attributes?.title}
          </Box>

          <Box
            mt='3'
            fontWeight='semibold'
            as='h4'
            lineHeight='5'
            noOfLines={3}
          >
            {plat?.attributes?.description}
          </Box>
  
          <Box display='flex' flexDirection={'column'} mt='2' alignItems='flex-start'>
            {
              courses?.data.length ? <em>Cours disponibles</em> : <p>Pas de cours disponible pour ce plat</p>
            }
            {courses?.data.map((course, i) => (
                <li 
                  onClick={()=>navigate(`/cours/${course.id}`)} style={{zIndex:3, borderRadius: 30, cursor: 'pointer', fontWeight: 'bold'}} 
                  className='p-2 bg-secondary text-light'
                  >
                  {course.attributes.title}
                </li> 
              ))}
          </Box>

        </Box>
      </Box>
    )
  }