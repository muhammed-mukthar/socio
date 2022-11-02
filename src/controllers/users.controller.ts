import { Request, Response } from "express";
import { UpdateUser } from "../services/user.service";

import createHashedPass from "../utils/hashpass";

export async function updateUserHandler(req: Request, res: Response) {
  if (req.body.userId === req.params.id || res.locals.user.id) {
    if (req.body.password) {
      try {
        req.body.password = await createHashedPass(req.body.password);
       
      } catch (err) {
        return res.status(403).json("you can only update your account");
      }
    }
    try {
    const updatedUser= await   UpdateUser({_id:req.params.id},{$set:req.body})
    res.status(200).json('Account has been updated')
    } catch (error) {
        return res.status(403).json("you can only update your account");    
    }



  }
}
