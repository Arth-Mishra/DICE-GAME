import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from 'styled-components';
import { useState } from 'react';
import { Button, OutlineButton } from "../styled/Buton";
import Rules from "./Rules";

const GamePlay = () => {
  const [score,setScore]=useState(0);

  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error, setError]=useState("");
  const [rules,setRules]=useState(false);

  const generateRandomNumber=(min,max)=>{
    // console.log(Math.floor(Math.random()*(max-min)+min));
    return Math.floor(Math.random()*(max-min)+min);
  };

  const roleDice=()=>{
    if(!selectedNumber){
      setError("You have not selected any number")
      return;
    } 
    const randomNumber=generateRandomNumber(1,7)
    setCurrentDice((prev)=>randomNumber);
    
    if(selectedNumber===randomNumber){
      setScore((prev)=>prev+randomNumber);
    }else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore=()=>{
    setScore(0);
  };

  const toggleRulesBox=(prev)=>{
    setRules((prev=>!prev));
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
         selectedNumber={selectedNumber} 
         setSelectedNumber={setSelectedNumber} 
         setError={setError} 
         error={error} />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore} >Reset</OutlineButton>
        <Button onClick={toggleRulesBox}>{rules ? "Hide" : "Show"} Rules</Button>
      </div>
      {rules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;
const MainContainer=styled.div`
  padding-top: 18px;

  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .btns{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    /* max-width: 220px; */
  }
`;
