import React from "react"
import { Sidebar, Menu, MenuItem, SubMenu ,useProSidebar} from 'react-pro-sidebar';
import "../assets/css/Tutoriel.css"
import NavbarApp from "../components/generics/NavbarApp"
import Accueil from "./Accueil";
// import SectionHeader from "../components/utils/course/SectionHeader"

const menuStructure = [
    {
        label:"First menu",
        items:["menu Item 1","menu Item 2","menu Item 3","menu Item 4"]
    },
    {
        label:"Second menu",
        items:["menu Item 1","menu Item 2","menu Item 3","menu Item 4"]
    },
    {
        label:"Third menu",
        items:["menu Item 1","menu Item 2","menu Item 3","menu Item 4"]
    },
    {
        label:"Forth menu",
        items:["menu Item 1","menu Item 2","menu Item 3","menu Item 4"]
    },
]

export default function Tutoriel(){
    const { collapseSidebar } = useProSidebar();

    return(
        <>
            <NavbarApp />
            {/* <SectionHeader /> */}
            <main className="tutoriel-main" >

                <Sidebar breakPoint="md" >
                    <Menu>
                        {
                            menuStructure.map((menu,index)=>(
                                <SubMenu key={index} label={menu.label}>
                                    {menu?.items?.map((menuItems,menuItemsIndex)=>(
                                        <MenuItem key={menuItemsIndex} >
                                            {
                                                menuItems
                                            }
                                        </MenuItem>
                                    ))}
                                </SubMenu>
                            ))
                        }
                       
                    </Menu>
                </Sidebar>
                <section className="">
                    {/* <button onClick={() => collapseSidebar()}>Collapse</button> */}
                    <div className="container tutoriel-main-side-content">
                        <div className="row justify-content-center border align-items-center">
                            <div className="col-12 border">
                                <h1 className="border" >
                                    Qu'est-ce que le Lorem Ipsum?
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}