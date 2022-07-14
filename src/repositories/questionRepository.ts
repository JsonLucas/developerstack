import { prisma } from "../config/database.js";

export const setQuestion = async (question: string) => {
    const query = await prisma.questions.create({
        data: {
            question: question
        }
    });
    return query;
}

export const getQuestions = async () => {
    const query = await prisma.questions.findMany();
    return query;
}