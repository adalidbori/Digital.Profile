import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { clientID } from '../utiles/Keys';
export function Dashboard({ profile, setProfile }) {
    const navigate = useNavigate();
    const clientId = clientID;
    const logOut = () => {
        setProfile([]);
        navigate('/loginggle');
    };
    return (
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
    );
}