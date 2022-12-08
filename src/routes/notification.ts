import express, { Request, Response } from "express";
import { getallNotfiHandler, updateNotfiHandler } from "../controllers/notification.Controller";
import { VerifyTokenAndReissue } from "../middleware/jwtvalidate";

const router=express.Router()
router.get('/:id',VerifyTokenAndReissue,getallNotfiHandler),

router.put("/:id",VerifyTokenAndReissue,updateNotfiHandler)

export default router


