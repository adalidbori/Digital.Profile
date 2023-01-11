import { useState } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";


export function Landing() {
    const [showLanding, setShowLanding] = useState(false);

    const handleShowLanding = () => {
        setShowLanding(true);
        console.log('link')
    }

    return (
        <Router>
            <div className={showLanding ? 'hidden' : ''}>
                <Link to="/login" onClick={handleShowLanding}>Login</Link>
                <Link to="/register" onClick={handleShowLanding}>Register</Link>
                <h1>Landing Page</h1>
                <div>
                    <Routes>
                        <Route path="/login"  element={<Login />} />
                        <Route path="/register"  element={<Register />} />
                    </Routes>
                </div>
            </div>

        </Router>

    );
}