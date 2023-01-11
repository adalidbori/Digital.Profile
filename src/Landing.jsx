import { useEffect, useState } from "react";
import classnames from 'classnames';
import styles from './Landing.module.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    useLocation
} from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

export function Landing() {
    const [showLanding, setshowLanding] = useState(true);

    const handleNavigation = () => {
        setshowLanding(false);
    };

    const classes = classnames({
        [styles.textoEnAzul]: showLanding,
        [styles.hideGeneralDiv]: !showLanding
    });



    return (

        <div >
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <h1 className={classes}>Landing Page</h1>
            <div>
                <Routes>
                    <Route path="/login" element={<Login showLanding={showLanding} setshowLanding={setshowLanding} />} />
                    <Route path="/register" element={<Register showLanding={showLanding} setshowLanding={setshowLanding} />} />
                </Routes>
            </div>
        </div>
    );
}