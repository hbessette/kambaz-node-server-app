import * as quizDao from "./dao.js";
import * as questionDao from "../Questions/dao.js";
export default function QuizRoutes(app) {
  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizDao.deleteQuiz(quizId);
    res.send(status);
  });
  app.put("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    const status = await quizDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });
  app.post("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const question = {
      ...req.body,
      quiz: quizId,
    };
    const newQuestion = await questionDao.createQuestion(question);
    res.send(newQuestion);
  });

  app.get("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const questions = await questionDao.findQuestionsForQuiz(quizId);
    res.json(questions);
  });

  app.put("/api/quizzes/:quizId/questions", async (req, res) => {
    const { quizId } = req.params;
    const questionUpdates = req.body;
    const status = await questionDao.updateAllQuestions(quizId, questionUpdates);
    res.json(status);
  })
}
