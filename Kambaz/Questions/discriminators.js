import mongoose from "mongoose";
import model from "./model.js"
const MultipleChoiceSchema = new mongoose.Schema({
  choices: [String],
  correctAnswer: String,
});

const MultipleChoiceQuestion = model.discriminator(
  "Multiple Choice",
  MultipleChoiceSchema
);

const TrueFalseSchema = new mongoose.Schema({
    correctAnswer: Boolean
})

const TrueFalseQuestion = model.discriminator(
    "True/False",
    TrueFalseSchema
)

const FillInBlankSchema = new mongoose.Schema({
    correctAnswers: [String]
})

const FillInBlankQuestion = model.discriminator(
    "Fill in the Blank",
    FillInBlankSchema
)

export default {MultipleChoiceQuestion, TrueFalseQuestion, FillInBlankQuestion}

