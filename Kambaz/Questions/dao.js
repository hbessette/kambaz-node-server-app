import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export function findQuestionsForQuiz(quizId) {
  return model.find({ quiz: quizId });
}
export function createQuestion(question) {
  return model.create({ ...question, _id: uuidv4() });
  }
export function deleteQuestion(questionId) {
  return model.deleteOne({ _id: questionId });
}
export function updateQuestion(questionId, questionUpdates) {
  return model.updateOne({_id: questionId}, questionUpdates);
}

export async function updateAllQuestions(quizId, questionUpdates) {

  const existingQuestionsInDb = await model.find({ quiz: quizId });
  const existingIds = new Set(
    existingQuestionsInDb.map((q) => q._id.toString())
  );

  const existing = questionUpdates.filter(
    (q) => q._id && existingIds.has(q._id.toString())
  );
  const toInsert = questionUpdates.filter(
    (q) => !q._id || !existingIds.has(q._id.toString())
  );

  await Promise.all(
    existing.map((q) => model.updateOne({ _id: q._id, quiz: quizId }, q))
  );

  let insertedQuestions = [];
  if (toInsert.length > 0) {
    insertedQuestions = await model.insertMany(
      toInsert.map((q) => ({
        ...q,
        quiz: quizId,
        _id: q._id || uuidv4(),
      }))
    );
  }

  const allIdsToKeep = [
    ...existing.map((q) => q._id.toString()),
    ...insertedQuestions.map((q) => q._id.toString()),
  ];

  await model.deleteMany({
    quiz: quizId,
    _id: { $nin: allIdsToKeep },
  });
  return model.find({ quiz: quizId });
}
