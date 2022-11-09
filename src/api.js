import express from 'express';
import mysql from "mysql2";
import cors from "cors";
import router from "./router.js";

export default class API {

    query(method,controllers) {
        switch (method) {
            case "POST":
                return controllers.save()

            case "DELETE_ONE":
                return controllers.deleteByID()

            case "GET_ALL":
                return controllers.allFind()

            case "GET_ONE":
                return controllers.findOne()

            case "UPDATE":
                return controllers.updateByID()

        }
    }

    main(port) {

        const app = express()


        app.use(router)
      
        // static files

        app.use(express.urlencoded({ extended: false }))
        app.use(express.json())
        app.use(cors())
        app.use('/public', express.static('public'));


        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)

        })
    }

    driver(key) {
         
          const connection = mysql.createConnection({
              host: key.host,
              user: key.user,
              password: key.password,
              database: key.database,
          })
    
          connection.query('SELECT 1 + 1 AS solution');
        
 
          
         
      

    }







}