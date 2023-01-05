import styles from './Register.module.css';

export function Register() {
    return (
        <div>
            <h1 className={styles.title}>Create your account</h1>
            <p className={styles.smallDesc}>Choose your Linktree username. You can always change it later.</p>

            <div className={styles.generalContainer}>
                <div className={styles.usernameContainer}>
                    <label className={styles.usernameLabel} htmlFor="idUsername">digital.profile/</label>
                    <input className={styles.inputUsername} type="text" id='idUsername' placeholder="username" />
                </div>
            </div>

            <div className={styles.inputEmailConteiner}>
                <input className={styles.inputEmail} type="email" name="" id="" placeholder="Email" />
            </div>
            <div>
                <input type="password" name="" id="" placeholder="Password" />
            </div>
            <div>
                <button>Create account</button>
            </div>
        </div>
    );
}