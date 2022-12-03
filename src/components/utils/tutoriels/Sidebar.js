import { Link } from "react-router-dom";
import { CalendarIcon } from '@chakra-ui/icons'
import { Steps } from 'rsuite';


export default function Sidebar({coursLessons,currentLessonIndex,courseId}){


    return(
        <nav id="sidebar" className="sidebar js-sidebar" >
			<div style={{backgroundColor:"orangered"}} className="sidebar-content js-simplebar "  >
				<a className="sidebar-brand bg-white  shadow" href="#">
					<span className="align-middle pb-5 text-dark fw-bolder ">Progression</span>
					<Steps currentStatus='process' current={currentLessonIndex}>
						<Steps.Item />
						<Steps.Item />
						<Steps.Item />
					</Steps>
				</a>

				<ul className="sidebar-nav">
					<li className="sidebar-header fw-bolder fs-5">
						Structure du cours
					</li>
					{coursLessons && coursLessons.map((lesson,index)=>{
						let lessonInfo = lesson?.attributes
						return (<li key={index} className={`sidebar-item ${((currentLessonIndex +1) === lesson.id) && "active"} `}>
						<Link className="sidebar-link d-flex align-items-center text-decoration-none" to={`/cours/${courseId}/tutoriel1/${lesson.id} `}>
						<CalendarIcon /> <span className="align-middle"> {lessonInfo.title} </span>
						</Link>
						</li>)
					})
					}
				</ul>
			</div>
		</nav>

    )
}