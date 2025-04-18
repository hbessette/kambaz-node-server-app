import mongoose from "mongoose";
import model from "./model.js"
const MultipleChoiceSchema = new mongoose.Schema({
  choices: [{ type: String }],
  correctAnswer: String,
});

const MultipleChoiceQuestion = model.discriminator(
  "multipleChoice",
  MultipleChoiceSchema
);

const TrueFalseSchema = new mongoose.Schema({
    correctAnswer: Boolean
})

const TrueFalseQuestion = model.discriminator(
    "trueFalse",
    TrueFalseSchema
)

const FillInBlankSchema = new mongoose.Schema({
    correctAnswers: [{ type: String }]
})

const FillInBlankQuestion = model.discriminator(
    "fillInBlank",
    FillInBlankSchema
)

export default {MultipleChoiceQuestion, TrueFalseQuestion, FillInBlankQuestion}

