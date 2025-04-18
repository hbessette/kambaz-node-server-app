import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
import {
  MultipleChoiceQuestion,
  TrueFalseQuestion,
  FillInBlankQuestion,
} from "./discriminators.js";
export function findQuestionsForQuiz(quizId) {
  return model.find({ quiz: quizId });
}
export function createQuestion(question) {
  switch (question.questionType) {
    case "multipleChoice":
      return MultipleChoiceQuestion.create({ ...question, _id: uuidv4() });
    case "trueFalse":
      return TrueFalseQuestion.create({ ...question, _id: uuidv4() });
    case "fillInBlank":
      return FillInBlankQuestion.create({ ...question, _id: uuidv4() });
  }
}
export function deleteQuestion(questionId) {
  return model.deleteOne({ _id: questionId });
}
export function updateQuiz(questionId, questionUpdates) {
  return model.updateOne({ _id: questionId }, questionUpdates);
}
