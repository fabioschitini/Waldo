
import styled from 'styled-components'
import {createGlobalStyle }  from 'styled-components'


 const Img = styled.img`
  width: 1000px;
  height:700px;
     position: absolute;
    left: 23%;
    top: 20%;
  `
   const Items = styled.li`
  color: black;
  list-style: none;
  cursor: pointer;
  `
   const List = styled.ul`
   position:absolute;
    top:${(props)=>props.countY}px;
left:${(props)=>props.countX+40}px;
  background-color:aliceblue;
  `
  const Target = styled.span`
  height: 45px;
  width: 45px;
  background-color: none;
  border-radius: 50%;
  display: inline-block;
  position:absolute;
  top:${(props)=>props.countY-25}px;
  left:${(props)=>props.countX-25}px;
border: #181917;
    border-style: dashed;
    border-width: 8px;
`
export const ButtonLabel = styled.label`
font-size: 25px;
color: white;
`
 const fuck=()=> {
    console.log('fuck you')
 }
const dams = 'shit'
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
`
export {Img,Items,Target,List,dams}