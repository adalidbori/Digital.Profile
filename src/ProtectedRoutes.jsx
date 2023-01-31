
import { Navigate } from 'react-router-dom';
export function ProtectedRoutes({ profile, children }) {
    if (!profile) {
        return <Navigate to="/loginggle" />;
    }
    return (
        <div>
            {children}
        </div>
    );
}