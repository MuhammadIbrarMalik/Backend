import { DataTypes } from "sequelize";
import sequelize from "../../Database/configuration.js";
import userModel from "../user/index.js";

const postModel = sequelize.define(
  "post",
  {
    Tittle: {
      type: DataTypes.STRING(100),
    },
    Description: {
      type: DataTypes.STRING(1000),
    },
  },
  { paranoid: true, timestamps: false }
);
userModel.hasMany(postModel);
postModel.belongsTo(userModel);
export default postModel;
