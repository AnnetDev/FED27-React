import { NavLink } from "react-router-dom"; 
import styles from './Navigation.module.css';


export function Navigation () {
    const navItems = [
        { name: "Homepage", to: "/", content: "Home" },
        { name: "About", to: "/about", content: "About" },
        { name: "Contact", to: "/contact", content: "Contact" },
    ];

    return (
        <>
        {/* <ul className={styles.navigation}>
            <li><NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/about">About</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/contact">Contact</NavLink></li>
        </ul> */}
        <ul className={styles.navigation}>
            {navItems.map((item) => 
            <li key={item.name}>
                <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to={item.to}>{item.content}</NavLink>
            </li>)}
        </ul>
        </>
    );
}
