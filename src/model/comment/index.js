import { DataTypes } from "sequelize";
import sequelize from "../../Database/configuration.js";
import userModel from "../user/index.js";
import postModel from "../post/index.js";

const commentModel = sequelize.define(
  "comment",
  {
    Description: {
      type: DataTypes.STRING(1000),
    },
  },
  { paranoid: true, timestamps: false }
);
userModel.hasMany(commentModel);
commentModel.belongsTo(userModel);
userModel.hasMany(postModel);
postModel.belongsTo(userModel);

export default commentModel;
