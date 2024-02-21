import { log } from "console";
import commentModel from "../../model/comment/index.js";
import userModel from "../../model/user/index.js";
import postModel from "../../model/post/index.js";

const commentController = {
  getall: async (req, res) => {
    const comment = await commentModel.findAll();
    res.json({
      message: "This is all data of your comment table",
      comment,
    });
  },
  getone: async (req, res) => {
    const params = req.params;
    const comment = await commentModel.findByPk(params.commentid);
    if (!comment) {
      return res.status(404).json({
        message: "NO data found",
      });
    }
    res.json({
      message: "This is your required data",
      comment,
    });
  },
  create: async (req, res) => {
    const payload = req.body;

    const comment = await commentModel.create({
      Description: payload.Description,
    });
    res.json({
      message: "comment created",
      comment,
    });
  },
  update: async (req, res) => {
    const payload = req.body;

    const params = req.params;

    const comment = await commentModel.findByPk(params.commentid);

    if (!comment) {
      return res.status(404).json({
        message: "NO data found",
      });
    }

    comment.Description = payload.Description;

    await comment.save();

    res.json({
      message: "comment updated",
      comment,
    });
  },
};
userModel.hasMany(commentModel);
commentModel.belongsTo(userModel);
userModel.hasMany(postModel);
postModel.belongsTo(userModel);

export default commentController;
