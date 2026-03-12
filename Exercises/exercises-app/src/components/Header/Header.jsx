import { Navigation } from "../Navigation/Navigation";
import styles from "./Header.module.css";

export function Header() {
    return (
        <header className={styles.header}>
            <Navigation />

            {/* <div className="user-info">
                <p>Hi {user.name}!</p>
                <p>City: {user.city}</p>
                <p>Has Pets: {user.hasPets ? "Yes" : "No"}</p>
                <p>Age: {user.age}</p>
            </div> */}
        </header>
    );
}
