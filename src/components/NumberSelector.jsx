
import styled from 'styled-components';

const NumberSelector = ({setError,error,setSelectedNumber,selectedNumber}) => {
    const NumberArray=[1,2,3,4,5,6];
    // document.addEventListener("keydown",(event)=>{
    //     console.log(event.key);
    //     setSelectedNumber(event.key);
    //     document.querySelector('.box').backgro
    // })
    // console.log(selectedNumber);
    const numberSelectorHandler=(num)=>{
        setSelectedNumber(num)
        setError("");
    }
  return (
    <NumberSelectorContainer>
        <p className='error'>{error}</p>
        <div className='flex'>
            {
                NumberArray.map((num,i)=>(
                    <Box className='box' key={i} 
                    onClick={()=>numberSelectorHandler(num)}
                    isSelected={num===selectedNumber}
                    >{num}</Box>
                ))
            }
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;
const NumberSelectorContainer=styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 18px;
        font-weight: 700;
    }
    .error{
        color: red;
    }
`;
const Box=styled.div`
    height: 60px;
    width: 60px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 20px;
    font-weight: 700;
    background-color: ${(props)=>props.isSelected ? "black": "white"};
    color: ${(props)=>props.isSelected ? "white": "black"};
    cursor: pointer;
`;
