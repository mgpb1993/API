import {Router} from 'express';

const router  = Router ()
 
//router.use()



router.get("/GET",(req,res)=>{

res.json({msn:"Welcome to API"})


})


export default router;