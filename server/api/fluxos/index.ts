import { db } from '@/server/lib/firebase';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";


export default defineEventHandler(async () => {

    const docRef = doc(db, "fluxos", "teste");
    const docSnap = await getDoc(docRef);
    let payload = {};


    if (docSnap.exists()) {
        payload = docSnap.data();
    } else {
        
        payload = {
            status : 404,
            message : "Fluxo não encontrado"
        }

    }

    return {
        status: 200,
        message: "Fluxo encontrado",
        payload 
    };
});