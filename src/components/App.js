import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState(null);
  //const [handleRefresh, setHandleRefresh] = useState(false)

  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then((response)=>response.json())
    .then((data)=>{
      setQuestions(data);
    })
  });

 

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (<QuestionForm questions={questions} />) : (questions && <QuestionList setQuestionsInfo={setQuestions} QuestionsData={questions}/>)}
    </main>
  );
}

export default App;
