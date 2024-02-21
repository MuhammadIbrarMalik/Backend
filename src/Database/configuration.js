import { Sequelize } from "sequelize";
const sequelize = new Sequelize("socialMedia", "postgres", "Xidc2548", {
  host: "localhost",
  dialect: "postgres",
});
const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
export { connectDb };
