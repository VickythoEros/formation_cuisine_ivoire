/* eslint-disable jsx-a11y/anchor-is-valid */
import { IconButton,  } from 'rsuite';
import AlignCenterIcon from '@rsuite/icons/legacy/AlignCenter';
import BreadcrumbMenu from './BreadcrumbMenu';

export default function Navbar(){

    return(
        <nav className="navbar-light pt-3 ps-2 d-flex align-items-center">
				<a className="sidebar-toggle js-sidebar-toggle">
                <IconButton className='' icon={<AlignCenterIcon />} color="green" appearance="primary" circle />
                </a>
                <BreadcrumbMenu />
			</nav>
        )
}