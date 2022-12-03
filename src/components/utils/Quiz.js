import { Radio, RadioGroup } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'


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

    return(
        <div className="container py-5 my-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-12">
                    <div className="shadow p-4 rounded " style={{borderLeft:`5px solid orangered`}} >
                        <h3 className='h3' > {title}  une louche - un couteau - quelques petit assiette caoutchouc  </h3>
                        <small> Veuillez selectionner votre response </small>
                        <div className=" ms-4 py-4">
                            <RadiosItems name="quiz-courses" title={" une louche - un couteau - quelques petit assiette caoutchouc "} />
                            <RadiosItems name="quiz-courses"  title={" une louche - un couteau - quelques petit assiette caoutchouc "} />
                            <RadiosItems name="quiz-courses"  title={" une louche - un couteau - quelques petit assiette caoutchouc "} />
                        </div>
                        <div className="text-end ">
                            <Button rounded="2xl" colorScheme='teal' variant='outline'>
                                Valider ma response
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

    )
}

export default Quiz