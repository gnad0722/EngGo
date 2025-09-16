import React from "react";
import Vocabulary from "./Vocabulary";

function ListVocabulary(props){
    const listVocab=props.listVocab;
    return(
        <ul>
        {listVocab.map((element,index) => {
          return (
            <Vocabulary
              vocabulary={element.vocabulary}
              example={element.example}
              key={element.id}
            />
          );
        })}
      </ul>
    );
}
export default ListVocabulary;