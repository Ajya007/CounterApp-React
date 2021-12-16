
import styled from '@emotion/styled';

interface Props{
    value:string;
    testid:string;
    click: React.MouseEventHandler<HTMLButtonElement> | undefined
   
    

}


const Button = styled.button`
  padding: 0.5rem;
  background-color: rgb(195, 221, 79);
  font-size: 1rem;
  border-radius: 8px;
  border:none;
  outline:none;
  color: black;
  font-weight: bold;
  cursor:pointer;
  &:hover {
    color: rgb(140, 138, 143);;
  }
`

const Button1 = ({value,testid,click}:Props) => {

    return(
       <Button data-testid={testid} type="button" onClick={click} >{value}</Button>
    )
}

export default Button1;