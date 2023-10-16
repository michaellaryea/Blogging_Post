import sequelize from "../db/dbConfig.js";
import DataType from "sequelize";

const post = sequelize.define("posts",{
  id:{
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title:{
    type: DataType.STRING,
    allowNull:false
  },
  slug:{
    type: DataType.STRING,
    allowNull: false
  },
  content:{
    type: DataType.STRING,
    allowNull:false
  },
  user_id:{
    type: DataType.UUIDV4,
    References:{
      model: "users",
      key: "id"
    }
  }
});

export default post;