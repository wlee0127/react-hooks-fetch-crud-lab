import React from "react";

function QuestionItem({ questions, deleteQuestion, changeIndex }) {
  const { id, prompt, answers, correctIndex } = questions;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(id) {
    deleteQuestion(id);
  }

  function handleChange(event) {
    const questionIndex = event.target.value;
    changeIndex(questionIndex);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

