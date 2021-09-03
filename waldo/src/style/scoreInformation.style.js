import styled from 'styled-components'

export const Check = styled.input`

&:checked{
background-color: orange;
border: 1px solid blue;
}
`
export const NamesList = styled.ul`
display: flex;
  justify-content: space-around;
  color: white;
  height: 50%;
  flex-direction: column;
`

export const Names=styled.li`
font-size: 30px;
 list-style: none;
`
export const Cronometer = styled.h1`
color:white;
text-align: center;
    position: relative;
    top: 40px;
`
export const DivNames = styled.div`
width: 300px;
    height: 1000px;
    background-color: black;
`

export const BestScore = styled.p`
color: #b57b11;
position: relative;
    top: 40px;
    text-align: center;
    font-size: 25px;
    margin: -10px;`