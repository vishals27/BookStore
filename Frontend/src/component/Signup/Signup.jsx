import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://backend-bookstore-runa.onrender.com";


function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [authUser, setAuthUser] = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        };
        await axios.post(`${API_BASE_URL}/user/signup`, userInfo)
            .then((res) => {
                if (res.data) {
                    toast.success("Signed up successfully");
                    navigate(from, { replace: true });
                }
                localStorage.setItem("User", JSON.stringify(res.data.user));
                setAuthUser(res.data.user);
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className=" w-[600px] ">
                    <div className="bg-base-100 p-8 rounded-xl shadow-md relative">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Link
                                to="/"
                                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            >
                                ✕
                            </Link>

                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            <div className="mt-4 space-y-2">
                                <span>Password</span>
                                <br />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                            </div>
                            <div className="flex justify-around mt-4">
                                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                    Signup
                                </button>
                                <div className="text-xl">
                                    Have an account?{" "}
                                    <button
                                        type="button"
                                        className="underline text-blue-500 cursor-pointer"
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                        <Login />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;