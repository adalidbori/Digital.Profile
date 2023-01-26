import { useEffect, useState } from 'react';
import styles from './Register.module.css';
import classnames from 'classnames';

export function Login({ setshowLanding }) {
    //setshowLanding(false);

    const [inputEmail, setinputEmail] = useState('');

    const [inputPass, setinputPass] = useState('');
    const [error, setError] = useState(false);

    
    const [json, setJson] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/clients/login", {
            method: "POST",
            body: json,
            headers: {
                "Content-Type": "application/json"
              }
        }).then(result => result.json()).then(data => {
            console.log(data)
            
            
        })
    }, [json])

    const isDisable = () => {
        if (!error) {
            if (inputPass) {//preguntar si no es vacio o falso
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }

    const handleChange = (event) => {
        setinputEmail(event.target.value);
        if (!validateEmail(inputEmail)) {
            setError(true);
        } else {
            setError(false);
        }
    }

    const classes = classnames(styles.inputEmail, {
        [styles.inputEmailError]: error
    });

    const validateEmail = (email) => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    const handlePassChange = event => {
        setinputPass(event.target.value);
    };

    const sendObject = () => {
        if (inputEmail && inputPass) {
            const aux = {
                email: inputEmail,
                cpassword: inputPass
            }
            setJson(JSON.stringify(aux));
        }

    }
    return (
        <div>
            <h1 className={styles.title}>Log in to your Linktree</h1>


            <div className={styles.inputEmailConteiner}>
                <input className={classes} type="email" name="" id="" placeholder="Email" onChange={handleChange} />

                {<p style={{ color: 'red' }}>{error}</p>}
            </div>

            <div className={styles.inputEmailConteiner}>
                <input className={styles.inputEmail} onChange={handlePassChange} value={inputPass} type="password" placeholder="Password" />
            </div>
            <div className={styles.buttonCreateContainer}>
                <button onClick={() => sendObject()} className={styles.buttonCreate} disabled={isDisable()}>Login</button>
            </div>
        </div>
    );
}