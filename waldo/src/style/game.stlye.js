 import styled from 'styled-components'
export const Img = styled.img`
  width: 1000px;
  height:700px;
     position: absolute;
    left: 23%;
    top: 20%;
  `
  export  const Items = styled.li`
  color: black;
  list-style: none;
  cursor: pointer;
  `
   export const List = styled.ul`
   position:absolute;
    top:${(props)=>props.countY}px;
left:${(props)=>props.countX+40}px;
  background-color:aliceblue;
  `
  export const Target = styled.span`
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