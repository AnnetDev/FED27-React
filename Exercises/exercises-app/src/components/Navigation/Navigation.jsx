import { NavLink } from "react-router-dom";
import styles from './Navigation.module.css';
import { Clock } from "../../utils/utils";
import { useState, useEffect } from "react";




export function Navigation() {
    const navItems = [
        { name: "Homepage", to: "/", content: "Home" },
        { name: "About", to: "/about", content: "About" },
        { name: "Contact", to: "/contact", content: "Contact" },
        { name: "UseRefPage", to: "/useref", content: "UseRefPage" },
    ];

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval((time) => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    });

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
            <Clock time={time} color={'white'}/>  
        </>
    );
}
