import { Request, Response } from "express";
import answerService from "../services/answerService.js";
import questionService  from "../services/questionService.js";

export async function create(req: Request, res: Response) {
  const { body } = req;
  try{
    await questionService.setQuestion(body.question);
    res.status(201).send('question created.');  
  }catch(e: any){
    throw e;
  }
}

export async function answer(req: Request, res: Response) {
  const { body } = req;
  try{
    await answerService.setAnswer(body.answer, body.questionId);
    res.status(201).send('question answered!');
  }catch(e: any){
    throw e;
  }
}

export async function get(req: Request, res: Response) {
  try{
    const questions = await questionService.getQuestions();
    res.status(200).send(questions); 
  }catch(e: any){
    throw e;
  }
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  try{
    const answers = await answerService.getAnswersByQuestionId(Number(id));
    res.status(200).send(answers);
  }catch(e: any){
    throw e;
  }
}

