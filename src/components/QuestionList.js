
import React, {useState} from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({QuestionsData}) {

  function deleteHandler(id) {
    console.log(id);
    fetch(`http://localhost:4000/questions/${id}`,{
    method: `DELETE`,
  })
    .then((response)=>response.json())
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>console.error(error))
  }  

  function changeHandler(questionIndex,id) {
    console.log(questionIndex);

    fetch(`http://localhost:4000/questions/${questionIndex}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        correctIndex: id,
      })
    })
    .then((response)=>response.json())
    .catch((error)=>console.error(error))
  }  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{QuestionsData.map((item)=>(<QuestionItem key={item.id} questions={item} deleteQuestion={()=>deleteHandler(item.id)} changeIndex={(questionIndex)=>changeHandler(item.id,questionIndex)}/>))}</ul>
    </section>
  );
}

export default QuestionList;
