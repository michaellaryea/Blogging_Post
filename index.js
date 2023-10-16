import sequelize from "./db/dbConfig.js"
import bodyParser from "body-parser"
import express from "express"
const port = 9000
const app = express()


app.use(bodyParser.json())



try{
    sequelize.authenticate()
    console.log("DB set up at port number",port)
    app.listen(port,()=>{
        console.log("Db has been set up")

    })


}catch(error){
    console.log(error)


}



(async ()=>{
    await sequelize.sync()
})()