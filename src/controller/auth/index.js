import userModel from "../../model/user/index.js";
import jwt from "jsonwebtoken";
const authController = {
  login: async (req, res) => {
    const payload = req.body;

    const user = await userModel.findOne({
      where: { Email: payload.Email, Password: payload.Password },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        Name: payload.Name,
        Email: payload.Email,
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      "abcdabcd"
    );

    res.json({
      message: "User Logged in",
      token,
    });
  },
};

export default authController;
