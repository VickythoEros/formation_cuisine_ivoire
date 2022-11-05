import { Link } from "react-router-dom";
import { CalendarIcon } from '@chakra-ui/icons'
import { Steps } from 'rsuite';


export default function Sidebar(){

    return(
        <nav id="sidebar" className="sidebar js-sidebar">
			<div className="sidebar-content js-simplebar">
				<a className="sidebar-brand" href="#">
					<span className="align-middle pb-5">Progression</span>
					<Steps currentStatus='process' current={2}>
						<Steps.Item />
						<Steps.Item />
						<Steps.Item />
						<Steps.Item />
					</Steps>
				</a>

				<ul className="sidebar-nav">
					<li className="sidebar-header fw-bolder fs-5">
						Structure du cours
					</li>

					<li className="sidebar-item active">
						<Link className="sidebar-link d-flex align-items-center text-decoration-none" to="/cours/1/tutoriel1">
						<CalendarIcon /> <span className="align-middle">Leçon 1</span>
						</Link>
					</li>
					<li className="sidebar-item ">
						<Link className="sidebar-link d-flex align-items-center text-decoration-none" to="/cours/1/tutoriel1">
						<CalendarIcon /> <span className="align-middle">Leçon 2</span>
						</Link>
					</li>
				

				
				</ul>
			</div>
		</nav>

    )
}