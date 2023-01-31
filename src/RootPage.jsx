import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { Landing } from "./Landing";
import { LoginGoogle } from "./LoginGoogle";
import { Dashboard } from "./Pages/dashboard";
import { ProtectedRoutes } from "./ProtectedRoutes";
export function RootPage() {
    
    const profile = JSON.parse(localStorage.getItem('profile'));

    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/loginggle" element={<LoginGoogle />} />
                        <Route path="/dashboard" element={
                            <ProtectedRoutes profile={profile}>
                                <Dashboard />
                            </ProtectedRoutes>
                        } />
                        <Route path="*" element={<h1>404 not found</h1>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}