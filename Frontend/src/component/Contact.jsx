import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        toast.success("Message sent successfully!");
        reset();
    };

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[500px]">
                    <div className="bg-base-100 p-8 rounded-xl shadow-md relative">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className="text-xl">Contact US</h2>
                            <div className="mt-4 space-y-2">
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter you name"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("name", { required: true })}

                                />
                                <br />

                                {errors.name && <span className="text-sm text-red-500">This field is required</span>}

                            </div>
                            <div className="mt-4 space-y-2">
                                <span>Email</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("email", { required: true })}

                                />
                                <br />

                                {errors.email && <span className="text-sm text-red-500">This field is required</span>}

                            </div>
                            <div className="mt-4 space-y-2">
                                <span>Message</span>
                                <br />
                                <textarea
                                    type="text"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    {...register("message", { required: false })}


                                />
                            </div>
                            <div className="mt-4 space-y-2  justify-around mt-4">
                                <input type="submit" value="Submit" className="btn text-white bg-blue-500 rounded-md hover:bg-blue-600" />

                                {/* <button className=" text-white bg-blue-600 rounded-md hover:bg-blue-700 duration-200">Submit</button> */}
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Contact;