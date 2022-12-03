import { Button,RadioGroup,Radio,Stack,useToast  } from '@chakra-ui/react'
import { useState } from 'react'

import '../../assets/css/utils/course/Quiz.css'

const RadiosItems = ({name,title})=>{

    return(
        <div className=''>
            <Radio className='my-2 ' size='lg' name={name} colorScheme='orange' defaultChecked>
                {title}
            </Radio>
        </div>
    )
}



const Quiz =({title})=>{

    const toast = useToast()
    const [radioCheckedValue,setRadioCheckedValue] = useState(0)
    const [colorBorder,setColorBorder] = useState('orangered')

    const handleVerifyQuiz = ()=>{
        toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            position:'top',
            duration: 9000,
            isClosable: true,
          })
          setColorBorder('green')
    }

    return(
        <div className="container py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-12">
                    <div className="shadow p-4 rounded card-quiz" style={{borderLeft:`5px solid ${colorBorder} `}} >
                    
                        <h3 className='h3' > {title}  une louche - un couteau - quelques petit assiette caoutchouc  </h3>
                        <small> Veuillez selectionner votre response </small>
                        <div className=" ms-4 py-4">
                            {/* <RadiosItems name="quiz-courses" title={" une louche - un couteau - quelques petit assiette caoutchouc "} />
                            <RadiosItems name="quiz-courses"  title={" une louche - un couteau - quelques petit assiette caoutchouc "} />
                            <RadiosItems name="quiz-courses"  title={" une louche - un couteau - quelques petit assiette caoutchouc "} /> */}
                            <RadioGroup onChange={setRadioCheckedValue} value={radioCheckedValue}>
                                <Stack>
                                    <Radio className='my-2 ' size='lg' name='quiz-courses' colorScheme='orange' value="1"  >
                                        une louche - un couteau - quelques petit assiette caoutchouc
                                    </Radio>
                                    <Radio className='my-2 ' size='lg' name='quiz-courses' colorScheme='orange' value="2"  >
                                        une louche - un couteau - quelques petit assiette caoutchouc
                                    </Radio>
                                    <Radio className='my-2 ' size='lg' name='quiz-courses' colorScheme='orange' value="3"   >
                                        une louche - un couteau - quelques petit assiette caoutchouc
                                    </Radio>
                                
                                </Stack>
                            </RadioGroup>
                        </div>
                        <div className="text-end ">
                            <Button onClick={()=>handleVerifyQuiz()} rounded="2xl" colorScheme='teal' variant='outline'>
                                Valider ma reponse
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

    )
}

export default Quiz