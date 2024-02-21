import { log } from "console";
import userModel from "../../model/user/index.js";

const userController = {
  getall: async (req, res) => {
    const user = await userModel.findAll();
    res.json({
      message: "This is list of all data in table user",
      user,
    });
  },
  getone: async (req, res) => {
    const params = req.params;
    const user = await userModel.findByPk(params.userid);
    if (!user) {
      return res.status(404).json({
        message: "NO data found",
      });
    }
    res.json({
      message: "This is your required data",
      user,
    });
  },
  deleteall: async (req, res) => {
    await userModel.destroy({
      where: {},
    });
    res.json({
      message: "All the users have been deleted",
    });
  },
  delete: async (req, res) => {
    const params = req.params;
    const user = await userModel.findByPk(params.userid);
    if (!user) {
      return res.status(404).json({
        message: "NO data found",
      });
    }
    user.destroy();
    res.json({
      message: "User has been deleted",
      user,
    });
  },

  create: async (req, res) => {
    const payload = req.body;

    const user = await userModel.create({
      Name: payload.Name,
      Password: payload.Password,
      Email: payload.Email,
    });
    res.json({
      message: "user created",
      user,
    });
  },
  update: async (req, res) => {
    const payload = req.body;

    const params = req.params;

    const user = await userModel.findByPk(params.userid);

    if (!user) {
      return res.status(404).json({
        message: "NO data found",
      });
    }

    user.Name = payload.Name;
    user.Password = payload.Password;
    user.Email = payload.Email;

    await user.save();

    res.json({
      message: "User updated",
      user,
    });
  },
};

export default userController;
