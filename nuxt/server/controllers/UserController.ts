import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

class UserController {
 
    async createUser(email: string, password: string) {
        
        const auth = getAuth();
 
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            return { status: 201, message: "Usuário criado com sucesso.", data: user };
        } catch (error) {
            return { status: 500, message: "Erro ao criar o usuário.", data: error };
        }
    }

    async login(email: string, password: string) {
        const auth = getAuth();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            return { status: 200, message: "Usuário logado com sucesso.", data: user };
        } catch (error) {
            return { status: 500, message: "Erro ao logar o usuário.", data: error };
        }
    }
}

export default UserController;