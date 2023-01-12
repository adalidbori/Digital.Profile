import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import { Landing } from "./Landing";
import { Login } from "./Login";
import { Register } from "./Register";
export function RootPage() {
    return (
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/" element={<Landing />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}