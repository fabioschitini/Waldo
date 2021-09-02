import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {ButtonSingIn} from './App.stlye'
import app from './firebase'
const auth = app.auth()
export const SingIn = () => {
  const singInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
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

