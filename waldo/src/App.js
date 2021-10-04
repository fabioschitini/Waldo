import 'firebase/compat/firestore';
import {  useState,useRef } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useDocumentData } from 'react-firebase-hooks/firestore'
import { SingIn, SingOut } from './firebase/SingIn'
import app from './firebase/firebase'
import { Img, Items, Target, List } from './style/game.stlye'
import {Names,NamesList,Cronometer,DivNames,BestScore,Check } from './style/scoreInformation.style'
import { Nav,GlobalStyle } from './style/App.stlye'
import {  getItems,updateItems,updateUserItems } from './firebase/fireStore'

const db = app.firestore()
const auth=app.auth()
function App() {
let a
  const [user] = useAuthState(auth)
  const [count, setCount] = useState(false)
    const [countX, setCountX] = useState(0)
  const [countY, setCountY] = useState(0)
  const [statusPoseidon,setStatusPoseidon]=useState(false)
  const [statusZeus, setStatusZeus] = useState(false)
    const [statusGladiator,setStatusGladiator]=useState(false)
  const [timer, setTimer] = useState(0)
  const increment = useRef(null)
  
 if (user) {
        a=db.collection(user.uid).doc('Best-Score')
     // setUserInfo(await (await GetItemUser(user.uid, 'Best-Score')).data())
 }
  let b = db.collection('coordinates').doc('Best-Score')
  const xx = useDocumentData(b)[0]
  const yy = useDocumentData(a)[0]
  

  
  function targetBox(e) {
    setCount(!count)
    setCountX(e.pageX)
    setCountY(e.pageY)
    console.log(statusGladiator)
  }

  
   function uploadingScore() {
       const trueTimer=timer
      const result = formatTime()
       updateItems('Best-Score', 'scores', xx.scores.concat(timer))
       const min = Math.min(...xx.scores)
       
              if (min > trueTimer) {
                let name=prompt("You just beat the highets score! Please enter your name so we can register on the site")
              updateItems('Best-Score', 'value', timer)
                updateItems('Best-Score', 'score', result)
                updateItems('Best-Score', 'bestName', name)     
                        }
      setTimer(0)
     setStatusPoseidon(false)
     setStatusZeus(false)
     setStatusGladiator(false)
     
       if (user) {    
                              updateUserItems(user.uid,'Best-Score', 'scores', yy.scores.concat(timer))
                            const min = Math.min(...yy.scores)
                        if (min > trueTimer) {
                          console.log('se ai exsite amor ooo')
                        
                        updateUserItems(user.uid,'Best-Score', 'score', result)
                                  }
                                          }
   }
  
  async function submitName(e) {
            

    let poseidon = await  (await getItems('Poseidon')).data()
    let zeus = await  (await getItems('Zeus')).data()
    let gladiator = await (await getItems('Gladiator')).data()
    if (  !statusPoseidon&& !statusZeus&& !statusGladiator) {
      Start()
    }
    
    if (e.target.id === 'Poseidon') {
            if ((poseidon.Xbegin < countX && countX < poseidon.Xend)
              && (poseidon.Ybegin < countY && countY < poseidon.Yend)) {
              setStatusPoseidon(true)
                updateItems(poseidon.id,'status',true)
              if (statusZeus && statusGladiator) {
                console.log('End Game')
                setStatusPoseidon(true)
                updateItems(poseidon.id, 'status', true)
                Pause()
                uploadingScore()
                
              }
            }
      else { console.log("Sike Poseidon") }
    }
    else if (e.target.id === 'Zeus') {
      
          if ((zeus.Xbegin < countX && countX < zeus.Xend)
           && (zeus.Ybegin < countY && countY < zeus.Yend)) {
            if (statusPoseidon && statusGladiator) {
               console.log('End Game')
                Pause()
                 setStatusZeus(true)
              updateItems(zeus.id, 'status', true)
              Pause()
              uploadingScore()
                  }
            else {
              setStatusZeus(true)
              updateItems(zeus.id,'status',true)
            }  
      }
      else{console.log('Sike Zeus')}
    }
    else if (e.target.id === 'Gladiator') {
      
      
          if ((gladiator.Xbegin < countX && countX < gladiator.Xend)
           && (gladiator.Ybegin < countY && countY < gladiator.Yend)) {
            if (statusPoseidon && statusZeus) {
              console.log('End Game')
              
              updateItems(gladiator.id,'status',true)
              setStatusGladiator(true)
              Pause()
              uploadingScore()
            }
            else {
              updateItems(gladiator.id,'status',true)
              setStatusGladiator(true)
            }
          }
      else { console.log("Sike Gladiator") }
    }
      
    
  }
    
  function defaults(e) {
    e.preventDefault()
  }
  
  function Start() {
     increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }
  function Pause() {
        clearInterval(increment.current)

  }
  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }
  
  return (
    
    <div className="App">
      
      <GlobalStyle/>
      <Nav>
        {user ? <SingOut /> : <SingIn />}
      </Nav>
      <DivNames>
        <Cronometer>{formatTime()}</Cronometer>
        
        {xx? <BestScore >Best Score on the game{xx.bestName ? <BestScore>{xx.bestName}</BestScore>
          : <BestScore>Anonymous</BestScore>}{xx.score}</BestScore> : null
          }

        <NamesList>
          <Names>Poseidon {statusPoseidon? <Check  onClick={defaults} type="checkbox" defaultChecked />
            : <input onClick={defaults}  type="checkbox" />}</Names>
            <Names>Zeus {statusZeus ? <Check  onClick={defaults} type="checkbox" defaultChecked />
            : <input onClick={defaults}  type="checkbox" />}</Names>
          <Names>Gladiator {statusGladiator ? <Check  onClick={defaults} type="checkbox" defaultChecked />
            : <input onClick={defaults}  type="checkbox" />} </Names>
        </NamesList>
        <BestScore >Your Best Score {yy?<BestScore>{yy.score}</BestScore>:<BestScore>login to record your scores</BestScore> }</BestScore>
      </DivNames>

      <Img onClick={targetBox} src='https://i.pinimg.com/originals/04/f4/c1/04f4c1fdc7eb4b71de3e90caebc882dc.jpg' />
      {count ? <div><Target countX={countX } countY={countY }/>
        <List countX={countX } countY={countY }>
              <Items id='Zeus'onClick={submitName}>Zeus</Items>
            <Items id='Gladiator' onClick={submitName}>Gladiator</Items>
            <Items id='Poseidon' onClick={submitName}>Poseidon</Items>
      </List>
      </div>
        
        : null}
    </div>
  );
}

export default App;