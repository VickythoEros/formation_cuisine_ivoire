import { Box,Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


export default function PlatsCrad({platItem}) {
  const navigate = useNavigate()
  const [plat,setPlat] = useState(platItem)
  
  useEffect(()=>{
    setPlat(platItem)
  },[platItem])
    
    
    return (
      <Box onClick={()=>navigate('/cours/1')} style={{zIndex:3}} className='my-4 bg-white py-4 px-4 shadow' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image height={250} src={plat.imageUrl} alt={plat.imageAlt} />
  
        <Box p='6'>
          {/* <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {plat.beds} beds &bull; {plat.baths} baths
            </Box>
          </Box> */}

          <Box
            mt='1'
            mb=""
            fontWeight='bold'
            as='h2'
            fontSize='lg'
            lineHeight='2'
            noOfLines={1}
          >
            {plat.title}
          </Box>
          <Box
            mt='3'
            fontWeight='semibold'
            as='h4'
            lineHeight='5'
            noOfLines={3}
          >
            {plat.description}
          </Box>
  
  
          <Box display='flex' mt='2' alignItems='center'>
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
          </Box>
        </Box>
      </Box>
    )
  }