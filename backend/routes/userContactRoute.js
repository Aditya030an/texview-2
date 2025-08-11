import express from "express";
import {handleConsultancyForm , handleContactForm} from "../controllers/userContactController.js";

const userContactRouter = express.Router();

userContactRouter.post("/contact", handleContactForm);
userContactRouter.post("/consultancy" , handleConsultancyForm);

export default userContactRouter;
