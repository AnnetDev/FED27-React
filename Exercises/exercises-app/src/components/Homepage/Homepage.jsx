import Layout from "../Layout";
import styles from "./Homepage.module.css";
import { useState } from "react";
import { MyButton } from "../MyButton";
import Avatar from "../Avatar";
import { Clock } from "../../utils/utils";
import { useEffect } from "react";

function Button({ count, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',  
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
}];

const Homepage = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [option, selectedOption] = useState("option1");
    
    const colorMap = [
        {id: "option1", color: "#800000", name: "Maroon"},
        {id: "option2", color: "#A9A9A9", name: "Dark Grey"},
        {id: "option3", color: "#800080", name: "Dark Purple"},
    ];
    
    function handleClick() {
        setCount(count + 1);
    }


    useEffect(() => {
        setInterval((time) => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    });
    
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

                <select className={styles.select} value={option} onChange={(e) => selectedOption(e.target.value)}>
                    {colorMap.map((option) => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                </select>

                <Clock color={colorMap.find(item => item.id === option)?.color} time={time} />

                <h2>Our Team</h2>
                   <ul>
                    {people.map((person) => (
                        <li key={person.id}>{person.name} - {person.profession}</li>
                    ))}
                    </ul> 
                    <h3>Our chemists</h3>
                    <ul>
                        {people.filter((person) => person.profession === "chemist").map((person) => (
                            <li key={person.id}>{person.name}</li>
                        ))}
                    </ul>
                    
            </div>
        </Layout>
    );
};

export default Homepage;
