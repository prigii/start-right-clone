import { Routes, Route } from "react-router-dom";
import Dashboard from "./UserDashboard";
import SignIn from "./SignInCard";
import SignUp from "./SignUpCard";
import PrivateRoute from "./PrivateRoute"

export default function BrowserRouter() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<SignIn />} />
            <Route element={<PrivateRoute /> }>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/" element={<SignUp />} />
        </Routes>
    );
}
