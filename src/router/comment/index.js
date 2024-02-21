import { Router } from "express";
import commentController from "../../controller/comment/index.js";
import commentValidator from "../../validator/comment/index.js";

const commentRouter = Router();
commentRouter.get("/comment", commentController.getall);
commentRouter.get("/comment/:commentid", commentController.getone);
commentRouter.post(
  "/comment",
  commentValidator.create,
  commentController.create
);
commentRouter.put(
  "/comment/:commentid",
  commentValidator.update,
  commentController.update
);

export default commentRouter;
