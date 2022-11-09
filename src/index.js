import API from "./api.js";
import key from "./key.js";

const port = 1993

const server = new API()
try {
    server.main(port)
    //    server.driver(key)
   // console.log(key)

} catch (error) {
    console.log("ERROR CON EXPRESS JS")
}

