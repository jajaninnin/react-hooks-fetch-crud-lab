import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";


function QuestionList() {
  const [quest, setQuest] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then((resp) => resp.json())
      .then((quest) => {
        setQuest(quest)
      })
    }, [])

  function onDelete(id) {
    const updatedQuest = quest.filter(quest => quest.id !== id)
    setQuest(updatedQuest)
  }
  
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      {<ul>{quest.map((quest) => {
        return (<QuestionItem key={quest.id} question={quest} onDelete={onDelete}/>);
      })}</ul>}
    </section>
  );
}

export default QuestionList;
