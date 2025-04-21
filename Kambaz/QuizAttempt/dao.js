import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
export function findQuizAttemptsForUserAndQuiz(userId, quizId) {
  return model.find({ user: userId, quiz: quizId});
}
export function createQuizAttempt(user, quiz, quizAttempt) {
  const newQuizAttempt = { ...quizAttempt, user: user, quiz: quiz,  _id: uuidv4() };
  return model.create(newQuizAttempt);
}
export function deleteQuizAttempt(quizAttemptId) {
  return model.deleteOne({ _id: quizAttemptId });
}
export function updateQuizAttempt(quizAttemptId, quizAttemptUpdates) {
  return model.updateOne({ _id: quizAttemptId }, quizAttemptUpdates);
}
