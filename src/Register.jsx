import { useState } from 'react';
import styles from './Register.module.css';
import classnames from 'classnames';
import {
    Link
} from "react-router-dom";


export function Register() {
    const [error, setError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    

    function isDisable() {
        if (!error) {
            if (username) {//preguntar si no es vacio o falso
                if (password) {
                    return false;
                }
                else {
                    return true;
                }
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    function validateEmail(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    function handleChange(event) {
        const value = event.target.value;
        if (!validateEmail(value)) {
            setError(true);
        } else {
            setError(false);
        }
    }

    const classes = classnames(styles.inputEmail, {
        [styles.inputEmailError]: error
    });

    return (
        
            <div>
                <h1 className={styles.title}>Create your account</h1>
                <p className={styles.smallDesc}>Choose your Linktree username. You can always change it later.</p>

                <div className={styles.generalContainer}>
                    <div className={styles.usernameContainer}>
                        <label className={styles.usernameLabel} htmlFor="idUsername">digital.profile/</label>
                        <input className={styles.inputUsername} type="text" id='idUsername' placeholder="username" onChange={e => setUsername(e.target.value)} />
                    </div>
                </div>

                <div className={styles.inputEmailConteiner}>
                    <input className={classes} type="email" name="" id="" placeholder="Email" onChange={handleChange} />

                    {<p style={{ color: 'red' }}>{error}</p>}
                </div>
                <div className={styles.inputEmailConteiner}>
                    <input className={styles.inputEmail} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                </div>
                <div className={styles.buttonCreateContainer}>
                    <button className={styles.buttonCreate} disabled={isDisable()}>Create account</button>
                </div>
                <div className={styles.have_an_account_div}>
                    <label>Have a Linktree account? </label>
                    <Link to="/login">{<label className={styles.login_link}>Login</label>}</Link>
                </div>
            </div>
        
    );
}