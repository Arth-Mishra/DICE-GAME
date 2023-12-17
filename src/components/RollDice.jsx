import styled from 'styled-components';

const RollDice = ({currentDice,roleDice}) => {


  return (
    <DiceContainer>
      <div onClick={roleDice} className='dice'>  
        <img src={`/images/dice_${currentDice}.png`} alt="Dice1" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice;
const DiceContainer=styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice{
        cursor:pointer;
    }

    img{
        height: 180px;
        width: 180px;
    }

    p{
        font-size: 18px;
    }

`;
