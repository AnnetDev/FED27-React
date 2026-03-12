import React from 'react';
import Layout from '../Layout';
import styles from './About.module.css';

const About = () => {
    return (
        <Layout>
            <div className={styles.container}>
                <h1>About Us</h1>
                <p>Welcome to our application! We are dedicated to providing the best service possible.</p>
                <p>Our team is passionate about technology and innovation.</p>
                <p>Thank you for visiting our About page!</p>
            </div>
        </Layout>
    );
};

export default About;