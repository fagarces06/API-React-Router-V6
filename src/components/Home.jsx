import { Link, Outlet } from "react-router-dom"
import Nav from "./Nav"
import { items } from "../data/items"
export default function Home(){
    return (
    
    <div>

        <Nav/>
   
        <div className="mainContainer">
            <div  className="sidebar">
                
                {items.map((i)=>(
                <div>
                    <Link to={`/contacts/${i.id}`}>{i.name}</Link>
                    
                </div>
                
                ))}
            </div>
        <Outlet></Outlet>


        </div>
    </div>
    
    
    )
}