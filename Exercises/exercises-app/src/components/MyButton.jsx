import { useState } from 'react';
import styles from '../components/Homepage/Homepage.module.css';

export function MyButton({ onClick, children }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    
    return (
        <button className={styles.button} onClick={handleClick}>
            {children} Clicked {count} times
        </button>
    );
}