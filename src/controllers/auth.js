import User from "../models/user";
import jwt from "jsonwebtoken";

export const signup = async(req, res) => {
    const { email, name, phone, password, address } = req.body
    try {
        const existUser = await User.findOne({ email }).exec();
        // key và value giống nhau thì viết 1 cái
        if (existUser) {
           return res.json({ 
                message: "Email đã tồn tại"
            })
        };
        const user = await new User({ email, name, phone, password, address }).save();
        return res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {

    }
}

export const signin = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).exec();
        if (!user) {
            res.status(400).json({
                message: "Email không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Sai mật khẩu"
            })
        }

        const token = jwt.sign({ _id: user._id }, "123456", { expiresIn: '1h' })
        res.json({
            token,
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
                phone: user.phone,
                avatar: user.avatar,
                address: user.address
            }
        })
    } catch (error) {

    }
}