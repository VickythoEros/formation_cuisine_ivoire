/* eslint-disable jsx-a11y/anchor-is-valid */
import { IconButton,  } from 'rsuite';
import AlignCenterIcon from '@rsuite/icons/legacy/AlignJustify';
import BreadcrumbMenu from './BreadcrumbMenu';

export default function Navbar({courseId,currentLessonIndex}){
    return(
        <nav className="navbar-light pt-3 ps-2 d-flex align-items-center">
				<a className="sidebar-toggle js-sidebar-toggle">
                <IconButton className='' icon={<AlignCenterIcon />} style={{color:"white",backgroundColor:'orangered'}}  appearance="primary" circle />
                </a>
                <BreadcrumbMenu  courseId={courseId} currentLessonIndex={currentLessonIndex} />
			</nav>
        )
}