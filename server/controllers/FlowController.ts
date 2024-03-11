import { db } from '@/server/lib/firebase';
import { collection, doc, setDoc, getDoc, updateDoc, deleteDoc, query, getDocs, where, arrayUnion } from "firebase/firestore";
import { Flow } from '~/interfaces/flow';
import { H3Event } from 'h3';
class FluxosController {

    private collectionRef = collection(db, "fluxos");

    constructor(collectionName: string) {
        this.collectionRef = collection(db, collectionName);
    }

    // Obtém todos os fluxos
    async getFluxos() {
        const fluxos = query(collection(db, "fluxos"));
        const querySnapshot = await getDocs(fluxos);

        let payload: Flow[] = [];

        querySnapshot.forEach((doc) => {
            payload.push(doc.data() as Flow);
        });

        if (payload.length === 0) {
            return { status: 404, message: "Nenhum fluxo foi encontrado." };
        }

        return { status: 200, message: `Fluxos foram encontrados.`, data: payload };
    }

    // Cria um novo fluxo
    // Cria um novo fluxo
    async createFluxo(flow: Flow) {
        const collectionFlow = new FluxosController("fluxos").collectionRef; // Cria uma referência para a coleção de fluxos
        const docRef = doc(collectionFlow); // Cria um novo documento com um ID gerado automaticamente

        try {
            await setDoc(docRef, flow); // Adiciona um novo documento com o corpo da requisição

            return { 
                status: 201, 
                message: "Fluxo criado com sucesso.", 
                document : docRef.id
            };

        } catch (err) {
            throw createError({                
                statusCode: 500,
                message: "Erro ao criar o fluxo.",
                cause: err,
            })          
        }
    }

    // Obtém um fluxo pelo nome do arquivo, empresa ou ambiente
    async getFluxoByAmbiente(ambiente: string) {
        const fluxos = query(collection(db, "fluxos"), where("ambiente", "==", ambiente));
        const querySnapshot = await getDocs(fluxos);

        let payload: Flow[] = [];

        querySnapshot.forEach((doc) => {
            payload.push(doc.data() as Flow);
        });

        if (payload.length === 0) {
            return { status: 404, message: "Nenhum fluxo foi encontrado." };
        }

        return { status: 200, message: `Fluxos de ambiente aplicado: ${ambiente}`, data: payload };
    }

    

    async getFluxoByEmpresa(empresa: string) {
        const fluxos = query(collection(db, "fluxos"), where("empresa", "==", empresa));
        const querySnapshot = await getDocs(fluxos);

        let payload: Flow[] = [];

        querySnapshot.forEach((doc) => {
            payload.push(doc.data() as Flow);
        });

        if (payload.length === 0) {
            return { status: 404, message: "Nenhum fluxo foi encontrado." };
        }

        return { status: 200, message: `Fluxos de empresa aplicado: ${empresa}`, data: payload };
    }

    // Obtém um fluxo verificando se a string passada contém no atributo arquivo
    async getFluxoByArquivo(search: string) {

        const fluxos = query(
            collection(db, "fluxos"), 
            where("arquivo", "array-contains-any", search.split(" ") )
        );

        const querySnapshot = await getDocs(fluxos);

        if(querySnapshot.empty) {
            return { status: 404, message: "Nenhum fluxo foi encontrado." };
        }

        return querySnapshot.docs.map(doc => doc.data());
    } 

    // Atualiza um fluxo pelo ID
    async updateFluxo(id: string, fluxo: { [key: string]: any }) {
        const docRef = doc(db, "fluxos", id);
        await updateDoc(docRef, fluxo);
        return { status: 200, message: "Fluxo atualizado com sucesso" };
    }

    // Deleta um fluxo pelo ID
    async deleteFluxo(id: string) {
        const docRef = doc(db, "fluxos", id);
        await deleteDoc(docRef);
        return { status: 200, message: "Fluxo deletado com sucesso" };
    }
}

export default FluxosController;