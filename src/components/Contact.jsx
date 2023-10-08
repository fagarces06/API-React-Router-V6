import { useMemo } from "react";
import { useParams } from "react-router-dom"
import { getContact } from "../data/items";

export default function Contact(){
    const params=useParams();
    
    const contact= useMemo(()=> getContact(params.id),[params.id]) //la funcion useMemo recibo dos parametros, el ultimo parametro es una lista, la cual cada vez que se actualiza id entonces ejecuta la funcion getContact
    console.log(contact);
    if(!contact){
        throw new Error("contacto no existe");
    }
    return (
        <div className="contactContainer">
        <h1>{contact.name}</h1>
        
        <p>{contact.telephone}</p>

        <p>{contact.favorite? 'favorite':'Regular Contact'}</p>
        
        </div>

    )
}

//27:14