import { Box,Image,Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'


export default function CategorieCard({imageUrl,imageAlt,title,reviewCount,rating}) {

  
    return (
      <Box style={{zIndex:3}} className='my-4 bg-white py-4 px-4' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image className='img-fluid  text-center mx-auto' src={imageUrl} alt={imageAlt} />

        <Box p='6'>
        
          <Box
            mt='1'
            fontWeight='semibold'
            as='h2'
            noOfLines={1}
          >
            {title}
          </Box>
  
      
  
          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {reviewCount} visites
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }