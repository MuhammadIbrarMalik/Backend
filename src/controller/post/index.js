import { log } from "console";
import postModel from "../../model/post/index.js";
import userModel from "../../model/user/index.js";

const postController = {
  getall: async (req, res) => {
    const post = await postModel.findAll();
    res.json({
      message: "This is all data of post table",
      post,
    });
  },
  getone: async (req, res) => {
    const params = req.params;
    const post = await postModel.findByPk(params.postid);
    if (!post) {
      return res.status(404).json({
        message: "NO data found",
      });
    }
    res.json({
      message: "This is your required post",
      post,
    });
  },
  create: async (req, res) => {
    const payload = req.body;

    const post = await postModel.create({
      Tittle: payload.Tittle,
      Description: payload.Description,
    });
    res.json({
      message: "post created",
      post,
    });
  },
  update: async (req, res) => {
    const payload = req.body;

    const params = req.params;

    const post = await postModel.findByPk(params.postid);

    if (!post) {
      return res.status(404).json({
        message: "NO data found",
      });
    }

    post.Tittle = payload.Tittle;
    post.Description = payload.Description;

    await post.save();

    res.json({
      message: "post updated",
      post,
    });
  },
};
userModel.hasMany(postModel);
postModel.belongsTo(userModel);

export default postController;
