import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const LogOut = () => {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser(
                {
                    ...authUser,
                    user: null
                }
            )
            toast.success("Logout successfully");
            localStorage.removeItem("User");
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        } catch (error) {
            setTimeout(() => {
                toast.error(error.message);
            }, 1000)
        }

    }
    return (
        <div>
            <button className="px-3 py-1 bg-red-700 text-white rounded-md cursor-pointer" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LogOut