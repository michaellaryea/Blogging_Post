import Sequelize from "sequelize";

const sequelize = new Sequelize ('bloggingpost','root','',{
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

export default sequelize;