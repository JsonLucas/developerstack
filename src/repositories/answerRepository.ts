import { prisma } from "../config/database.js";

export const setAnswer = async (answer: string, questionId: number) => {
    const query = await prisma.answers.create({
        data: {
            questionId: questionId,
            answer: answer
        }
    });
    return query;
}

export const getAnswersByQuestionId = async (questionId: number) => {
    const query = await prisma.questions.findMany({
        where: {
            id: questionId
        },
        select: {
            id: true,
            question: true,
            Answers: {
                select: {
                    answer: true
                }
            }
        }
    });
    return query;
}