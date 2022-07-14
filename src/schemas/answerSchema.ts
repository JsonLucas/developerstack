import Joi from "joi";
//import { CreateAnswerData } from "../services/answerService.js";

export const answerSchema = Joi.object({
  answer: Joi.string().required(),
  questionId: Joi.number().required()
});
