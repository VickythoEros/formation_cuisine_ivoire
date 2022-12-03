import { Box,Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BASE_URL_FILE } from '../../api/constantes';


export default function PlatsCrad({platItem}) {
  const navigate = useNavigate()
  const [plat,setPlat] = useState(platItem)
  
  useEffect(()=>{
    setPlat(platItem)
  },[platItem])
    
    
    return (
      <Box  onClick={()=>navigate(`/cours/${plat?.id}`)} style={{zIndex:3}} className='my-4 card-quiz bg-white py-4 px-4 shadow box-cours-container' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image height={250} src={`${BASE_URL_FILE}/uploads/sauce_graine_32ad5df3d3.jpg`} alt={plat.imageAlt} />
  
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
  
  
          {/* <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < plat.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {plat.views} vues
            </Box>
          </Box> */}
        </Box>
      </Box>
    )
  }