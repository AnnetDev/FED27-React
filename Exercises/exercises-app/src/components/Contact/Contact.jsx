import React from 'react';
import Layout from '../Layout';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <Layout name="Contact Page">
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <form className={styles.form}>
                    <div className={styles.field}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" className={styles.submitButton}>Send</button>
                </form>
            </div>
        </Layout>
    );
};

export default Contact;