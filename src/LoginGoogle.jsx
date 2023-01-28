import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import styles from './LoginGoogle.module.css';
import { useNavigate } from 'react-router-dom';
import { clientID } from './utiles/Keys';
export function LoginGoogle({profile, setProfile}) {
    const navigate = useNavigate();
    const clientId = clientID;
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    
    return (
        <div>
            {(Object.keys(profile).length === 0) ? (
                <div className={styles.generalContainer}>
                    <div className={styles.leftDiv}>
                        <div>
                            <div className={styles.title}>
                                <h1 className={styles.h1login}>Sign up on Digital Profile</h1>
                            </div>
                            <div className={styles.description}>
                                <p>The easiest way to introduce yourself thru internet.</p>
                            </div>
                            <div className={styles.botton}>
                                <GoogleLogin
                                    clientId={clientId}
                                    buttonText="Sign in with Google"
                                    onSuccess={onSuccess}
                                    onFailure={onFailure}
                                    cookiePolicy={'single_host_origin'}
                                    isSignedIn={true}
                                />
                            </div>
                        </div>


                    </div>

                    <div className={styles.rightDiv}>
                        <img className={styles.imagenLogin} src={require('./Assets/loginImg.png')} alt="Mi imagen" />
                    </div>
                </div>

            ) : (
                navigate('/dashboard')
            )}
        </div>
    );
}