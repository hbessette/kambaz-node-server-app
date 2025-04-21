import * as quizAttemptDao from "./dao.js";
export default function QuizAttemptRoutes(app) {
  app.put("/api/quizAttempt/:quizAttemptId", async (req, res) => {
    const { quizAttemptId } = req.params;
    const quizAttemptUpdates = req.body;
    const status = await quizAttemptDao.updateQuizAttempt(
      quizAttemptId,
      quizAttemptUpdates
    );
    res.json(status);
  });
}
