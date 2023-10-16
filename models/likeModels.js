import sequelize from "../db/dbConfig.js";
import DataType from "sequelize";

const like = sequelize.define("likes",{
  id:{
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  user_id:{
    type: DataType.UUIDV4,
    References:{
      model: "users",
      key: "id"
    }
  },
  post_id:{
    type: DataType.UUIDV4,
    References:{
      model: "posts",
      key: "id"
    }
  }
});

export default like;