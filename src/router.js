import {Router} from 'express';
import routerAPI from "./routes/index/index.routes.js";
const router  = Router ()
 
//router.use()

router.use("/api",routerAPI)

router.get("/Welcome",(req,res)=>{

res.json({msn:"Welcome to API"})


})


export default router;