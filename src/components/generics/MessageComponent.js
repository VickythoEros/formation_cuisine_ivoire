import Message  from 'rsuite/Message';
import { 
    ListItem,
    UnorderedList,
    } from "@chakra-ui/react";

import "../../assets/css/generics/MessageComponent.css"



export default function MessageComponent({type,items,header}){


    return(
        <div className="row justify-content-center align-items-center message-component py-md-3 py-4">
            <div className="col-12">
                <Message 
                    showIcon 
                    type={type}
                    header={
                        <p style={{fontSize:"18px",fontWeight:"bold"}} >
                            {header}
                        </p> } >
                    <UnorderedList className="py-3 ps-md-5 ps-sm-3 ps-0">
                        {
                            items?.map((item,index)=> <ListItem key={index} > {item} </ListItem> )
                        }
                    </UnorderedList>
                </Message>
                           
            </div>
        </div>
    )
}