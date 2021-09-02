import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import app from './firebase'
const db = app.firestore()
export async function addItem(item) {
     try {
        const response = await db.collection("coordinates").doc(item.id).set(item);
        return response
    }
    catch (error) {
        let errorCode = error.code;
  console.log(errorCode);
  alert(errorCode);

  let errorMessage = error.message;
  console.log(errorMessage);
  alert(errorMessage);
    }
}

export async function getItems(uid) {
    try {
        const response = await db.collection('coordinates').doc(uid).get()
        return response
    }
    catch (error) {
        let errorCode = error.code;
  console.log(errorCode);
  alert(errorCode);

  let errorMessage = error.message;
  console.log(errorMessage);
  alert(errorMessage);
    }
}

export async function updateItems(item,topic,newValue) {
    try {
        const doc = await db.collection('coordinates').doc(item).get()
        await db.collection('coordinates').doc(item).update({ [topic]:newValue})
        return doc
        

        
    } catch (error) {
        throw new Error(error)
    }
}