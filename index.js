import sequelize from "./db/dbConfig.js";
import bodyParser from "body-parser";
import express from "express";




const app = express();
app.use(bodyParser.json());
const port = 9000;


try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');

  app.listen(port, () => {
  console.log(`app listening on port ${port}`)
  });
} 
catch (error) {
  console.error('Unable to connect to the database:', error);
}

(async() =>{
  await sequelize.sync()
})
();

