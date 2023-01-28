import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { useState } from 'react';
import { Landing } from "./Landing";
import { Login } from "./Login";
import { LoginGoogle } from "./LoginGoogle";
import { Dashboard } from "./Pages/dashboard";
import { Register } from "./Register";
export function RootPage() {
    const [profile, setProfile] = useState([]);
    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" element={<Landing />} />
                        <Route path="/loginggle" element={<LoginGoogle profile={profile} setProfile={setProfile}/>} />
                        <Route path="/dashboard" element={<Dashboard profile={profile} setProfile={setProfile}/>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}