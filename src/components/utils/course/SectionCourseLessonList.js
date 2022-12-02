
import { 
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
     } from "@chakra-ui/react";
import { useState,useEffect } from "react";



const AccordionItemsElements = ({index,title,description})=>{

    return(
        <AccordionItem>
        <h2 style={{fontSize:"20px",fontWeight:600}}>
        <AccordionButton _expanded={{ bg: '#42bc87', color: 'white' }}>
            <Box flex='1' textAlign='left'>
            Leçon {index} : {title}
            </Box>
            <AccordionIcon />
        </AccordionButton>
        </h2>
        <AccordionPanel>
            <p style={{fontSize:"18px"}}>
                {description}
            </p>
        </AccordionPanel>
    </AccordionItem>
    )
}


export default function SectionCourseLessonList({coursLessons}){

    const [lessonsItems,setLessonsItems] = useState([])

    console.log('coiurse : ',coursLessons)
    useEffect(()=>{
        let listLessons = coursLessons
        listLessons.sort((fistLesson, secondLesson) => fistLesson.id - secondLesson.id);
        setLessonsItems(listLessons)

    },[coursLessons])

    return(
        <section className="section-course-lesson-list">
            <div className="container">
                <div className="row justify-content-center align-items-center">

                    <div className='col-12'>
                        <h2 className="py-2" style={{fontSize:"22px",fontWeight:"bold"}} >
                            Les différentes leçons du cours
                        </h2>
                        <Accordion allowToggle>
                        {lessonsItems && lessonsItems.map((lesson,index)=>{
                            let lessonInfo = lesson?.attributes
                            return(
                                <AccordionItemsElements 
                                    index={lesson.id}
                                    title={lessonInfo.title}
                                    description={lessonInfo.description}
                                />
                            )
                        })
                        }

                            {/* <AccordionItem>
                                <h2 style={{fontSize:"20px",fontWeight:600}}>
                                <AccordionButton _expanded={{ bg: '#42bc87', color: 'white' }}>
                                    <Box flex='1' textAlign='left'>
                                    Leçon 1 content
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    <p style={{fontSize:"18px"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                    </p>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2 style={{fontSize:"20px",fontWeight:600}}>
                                <AccordionButton _expanded={{ bg: '#42bc87', color: 'white' }}>
                                    <Box flex='1' textAlign='left'>
                                    Leçon 2 content
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    <p style={{fontSize:"18px"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. 
                                    </p>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2 style={{fontSize:"20px",fontWeight:600}}>
                                <AccordionButton _expanded={{ bg: '#42bc87', color: 'white' }}>
                                    <Box flex='1' textAlign='left'>
                                    Leçon 3 content
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel >
                                    <p style={{fontSize:"18px"}} className="py-5" >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                    </p>
                                </AccordionPanel>
                            </AccordionItem>
                             */}
                        
                        </Accordion>

                    </div>
                </div>
            </div>
        </section>
    )
}
