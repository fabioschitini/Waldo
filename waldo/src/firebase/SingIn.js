import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {ButtonSingIn} from '../style/App.stlye'
import app from './firebase'
import { AddItemUser,GetItemUser } from './fireStore'
const auth = app.auth()
export const SingIn = () => {
  
      const provider = new firebase.auth.GoogleAuthProvider()
  async function singInWithGoogle() {
    console.log('Sing in test')
    
    const response = await auth.signInWithPopup(provider)
    
    const test = await (await GetItemUser(response.user.uid, 'Best-Score')).data()
    if (!test) {
        AddItemUser(response.user.uid,{id:'Best-Score'})
    }
console.log('Already added mate')  }
  return (
    <div>
 <ButtonSingIn onClick={singInWithGoogle}>Sing In</ButtonSingIn>
    </div>
   
  )
}

export function SingOut() {
  return auth.currentUser && (
    <ButtonSingIn onClick={()=>auth.signOut()}>Sing Out</ButtonSingIn>
  )
}

