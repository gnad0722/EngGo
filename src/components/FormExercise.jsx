import React, { use, useState } from "react";
import axios from "axios";
import FormVocabulary from "./FormVocabulary";
import Vocabulary from "./Vocabulary";
import ListVocabulary from "./ListVocabulary";
function FormExercise(props) {
  const userData=props.userData;
  const [listVocab, setList] = useState(userData.listVocab);
  const [listRandom,setRandom]=useState(randomVocabulary(listVocab));
  const [show,setShow]=useState(false);
  function randomVocabulary(currList){
    let list=[];
    while (list.length<5 && list.length< currList.length){
      const randomIndex=Math.floor(Math.random()*currList.length);
      const randomVocabulary=currList[randomIndex];
      const checkValid=list.findIndex(element=>element.id===randomVocabulary.id)
      if (checkValid===-1) list.push(randomVocabulary);
    }
    return list;
  }
  function handleRandom(){
    setRandom(randomVocabulary(listVocab));
  }
  function handleAdd(newList){
    setList(newList);
    setRandom(randomVocabulary(newList));
    setShow(!show);
  }
  return (
    <div className="container form-container">
      {show ? <FormVocabulary userData={userData} onAdd={handleAdd}/> :  <ListVocabulary listVocab={listRandom}/>}
      <div
      style={{display: show ? "none":""}}
       className="flex flex-row-reverse justify-content-between mt-4 ps-2">
        <button
          type="button"
          className="btn btn-light"
          onClick={handleRandom}
          style={{ background: "transparent" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-caret-right-fill"
            viewBox="0 0 16 16"
          >
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </button>
        <button type="button" className="btn btn-secondary" onClick={()=>{
          setShow(!show);
        }}>
          Add vocabulary
        </button>
      </div>
    </div>
  );
}
export default FormExercise;
