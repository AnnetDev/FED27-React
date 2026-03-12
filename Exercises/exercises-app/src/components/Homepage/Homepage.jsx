import React from "react";
import Layout from "../Layout";
import styles from "./Homepage.module.css";
import { useState } from "react";
import { MyButton } from "../MyButton";
import Avatar from "../Avatar";

function Button({ count, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            Clicked {count} times
        </button>
    );
}



const Homepage = () => {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <Layout>
            <div className={styles.container}>
                <h1 className={styles.title}>Welcome to the Homepage!</h1>
                <p className={styles.description}>
                    This is a simple homepage created with React.
                </p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Avatar
                    person={{
                        name:
                            'Lin Lanying',
                        imageId: '1bX5QH6'
                    }}
                    size={100}
                />

                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        imageId: 'YfeOqp2'
                    }}
                />
                </div>
                

                <button className={styles.button} onClick={handleClick}>
                    Clicked {count} times
                </button>
                <button className={styles.button} onClick={handleClick}>
                    Clicked {count} times
                </button>
                <MyButton></MyButton>
                <Button count={count} onClick={handleClick}></Button>
            </div>
        </Layout>
    );
};

export default Homepage;
