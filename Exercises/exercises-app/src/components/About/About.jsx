import React from "react";
import Layout from "../Layout";
import styles from "./About.module.css";
import Avatar from "../Avatar";
import { Card } from "../../utils/utils";



const About = (props) => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>About Us</h1>
                <Avatar
                    size={100}
                    person={{
                        name: "Katsuko Saruhashi",
                        imageId: "YfeOqp2",
                    }}
                />

                <Card>
                    <Avatar
                        size={100}
                        person={{
                            name: "Katsuko Saruhashi",
                            imageId: "YfeOqp2",
                        }}
                    />
                    <p>Try add some text in Card </p>
                </Card>
                <p>
                    Welcome to our application! We are dedicated to providing the best
                    service possible.
                </p>
                <p>Our team is passionate about technology and innovation.</p>
                <p>Thank you for visiting our About page!</p>
            </div>
        </Layout>
    );
};

export default About;
