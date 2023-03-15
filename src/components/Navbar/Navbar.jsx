import ListNavbar from "../ListNavbar/ListNavbar"
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = ()=> {
    return (
        <ul className="list-nav">
            <NavLink to="/" className={({ isActive })=> isActive ? "active-category" : "category"}>
                <ListNavbar title="Inicio"/>
            </NavLink>
            <NavLink to="/category/mandos" className={({ isActive })=> isActive ? "active-category" : "category"}>
                <ListNavbar title="IN"/>
            </NavLink>
            <NavLink to="/category/audiovisual" className={({ isActive })=> isActive ? "active-category" : "category"}>
                <ListNavbar title="OUT"/>
            </NavLink>
            <NavLink to="/" className={({ isActive })=> isActive ? "active-category" : "category"}>
                <ListNavbar title="Nosotros"/>
            </NavLink>
        </ul>
    )
}
export default Navbar