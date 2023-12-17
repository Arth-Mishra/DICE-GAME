import styled from 'styled-components';
const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice Game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on Dice Image</p>
        <p>after click on dice if selected number is equal to the number on the dice then you will get the same point as dice(" ")</p>
        <p>If you guess wrong then 2 points will be deducted from your score</p>

      </div>
    </RulesContainer>
  )
}

export default Rules;
const RulesContainer=styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    background-color: #fbf1f1;
    padding: 15px;
    h1{
        font-size: 18px;
    }
    .text{
        margin-top: 18px;
    }
`;
