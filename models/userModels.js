import sequelize from "../db/dbConfig.js";
import DataType from "sequelize";

const user = sequelize.define("users",{
  id:{
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  username:{
    type: DataType.STRING,
    allowNull:false
  },
  password:{
    type: DataType.STRING,
    allowNull: false
  },
  email:{
    type: DataType.STRING,
    allowNull:false
  }
});

export default user;