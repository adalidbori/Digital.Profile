import styles from './Register.module.css';

export function Login({setshowLanding}){
    //setshowLanding(false);
    return (
        <div>
            <h1 className={styles.title}>Log in to your Linktree</h1>
                <div className={styles.generalContainer}>
                    <div className={styles.usernameContainer}>
                        <label className={styles.usernameLabel} htmlFor="idUsername">digital.profile/</label>
                        <input className={styles.inputUsername} type="text" id='idUsername' placeholder="username"  />
                    </div>
                </div>
                <div className={styles.inputEmailConteiner}>
                    <input className={styles.inputEmail} type="password" placeholder="Password" />
                </div>
                <div className={styles.buttonCreateContainer}>
                    <button onClick={() => console.log("Button clicked!")} className={styles.buttonCreate} >Create account</button>
                </div>
        </div>
    );
}