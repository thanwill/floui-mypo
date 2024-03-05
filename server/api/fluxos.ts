import { db } from '../lib/firestone';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";


export default defineEventHandler(async () => {

    const docRef = doc(db, "fluxos", "teste");
    const docSnap = await getDoc(docRef);
    let payload = {};


    if (docSnap.exists()) {
    
        console.log("Document data:", docSnap.data());

        payload = docSnap.data();

    } else {
        
        console.log("No such document!");

    }

    return {
        status: 200,
        payload 
    };
});