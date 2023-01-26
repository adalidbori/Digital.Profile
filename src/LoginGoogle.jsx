import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import styles from './LoginGoogle.module.css';

export function LoginGoogle() {
    const [profile, setProfile] = useState([]);
    const clientId = '402524613382-fl3q3fdrcs605o1n6l2sc2200btka5sa.apps.googleusercontent.com';
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

    const logOut = () => {
        setProfile([]);
    };
    console.log(profile);
    return (
        <div>
            {(Object.keys(profile).length === 0) ? (
                <div className={styles.generalContainer}>
                    <div>
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                    </div>
                    
                    <div className={styles.imageClass}>
                        <img src={require('./Assets/loginImg.png')} alt="Mi imagen" />
                    </div>
                </div>

            ) : (
                <div>
                    <img src={profile.imageUrl} alt="user" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <p>Client ID: {profile.googleId}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            )}
        </div>
    );
}