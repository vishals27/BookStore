import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const Signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ message: "User already exists" })
        }
        const hasPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname,
            email,
            password: hasPassword
        });
        await createdUser.save();
        res.status(201).json({
            message: "User createdd Succesfully", user: {
                fullname: createdUser.fullname,
                email: createdUser.email,
                _id: createdUser._id
            }
        })

    }
    catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({ message: "User not created" });
    }
}
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch || !user.email) {
            res.status(400).json({ message: "Invailid email or password" });
        } else {
            res.status(200).json(
                {
                    message: "User logged successfully",
                    user: {
                        _id: user._id,
                        fullname: user.fullname,
                        email: user.email
                    }
                }
            )
        }

    }
    catch (error) {
        console.log("Error: ", error.message);
        res.status(500).json({ message: "User not logged in" });
    }
}