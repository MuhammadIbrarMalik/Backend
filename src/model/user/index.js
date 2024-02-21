import { DataTypes } from "sequelize";
import sequelize from "../../Database/configuration.js";

const userModel = sequelize.define(
  "user",
  {
    Name: {
      type: DataTypes.STRING(100),
    },
    Email: {
      type: DataTypes.STRING(100),
    },
    Password: {
      type: DataTypes.STRING,
    },
  },
  { paranoid: true, timestamps: false }
);
export default userModel;
