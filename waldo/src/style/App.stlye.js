
import styled from 'styled-components'
import {createGlobalStyle }  from 'styled-components'


 
export const ButtonLabel = styled.label`
font-size: 25px;
color: white;
`
 
export const Check = styled.input`

&:checked{
background-color: orange;
border: 1px solid blue;
}
`
export const Nav = styled.nav`
 display: flex;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  min-height: 110px;
`
export const ButtonSingIn = styled.button`
position: absolute;
    left: 95%;
    top: 17px;
    background-color: rgb(7,7,51);
    color: white;
    border: none;
    cursor: pointer;
    &:hover{
color: orange;

font-size: 14px;
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
export const GlobalStyle = createGlobalStyle`
body{
        background-color: rgb(7, 7, 51);

    
}`
export const BestScore = styled.p`
color: #b57b11;
position: relative;
    top: 40px;
    text-align: center;
    font-size: 25px;
    margin: -10px;
`
export {Img,Items,Target,List}