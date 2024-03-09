import { db } from '@/server/lib/firebase';
import e from 'express';
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

class FluxosController {

    private fluxo: Fluxo;
    constructor() {
        this.fluxo = {
            nodes: [],
            connections: [],
            variablesFlow: [],
            data: {
                label: '',
                value: ''
            }
        }
    }

    // obtem todos os fluxos do banco de dados
    async getFluxos() {
        const docRef = doc(db, "fluxos", "teste");
        const docSnap = await getDoc(docRef);
        let payload = {};

        if (docSnap.exists()) {
            payload = docSnap.data();
        } else {
            payload = {
                status: 404,
                message: "Fluxo não encontrado"
            }
        }

        return {
            status: 200,
            message: "Fluxo encontrado",
            payload
        };
    }


}

export default new FluxosController();
