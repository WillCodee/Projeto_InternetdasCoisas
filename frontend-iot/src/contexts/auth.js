// import { Children, createContext, useEffect, useState } from "react";
// import axios from 'axios';

// export const AuthContext = createContext({});

// export const AuthProvider = ({ Children }) =>{

//     const [user, setUser] = useState();

//     useEffect(()=>{
//         const userToken = localStorage.getItem("user_token");
//         const userStorage = localStorage.getItem("user_db");
        
//         if(userToken && userStorage){
//             const hasUser = JSON.parse(userStorage)?.filter(
//                 (user) => user.email === JSON.parse(userToken).email
//             );

//             if(hasUser) setUser(hasUser[0]);
//         }
//     },{});

//     const acessar = (email, senha) =>{
//         const usersStorage = JSON.parse(localStorage.getItem("users_db"));

//         const hasUser = usersStorage?.filter((user) => user.email === email);
//         if(hasUser?.length){
//             if(hasUser[0].email === email && hasUser[0].password === senha){
//                 const token = Math.random().toString(36).substring(2);
//             localStorage.setItem("user_token", JSON.stringify({email, token}));
//             setUser({email, senha});
//             return;
//             }else{
//                 return "E-mail ou senha incorretos";
//             }
//         }else{
//             return "Usuário não cadastrado";
//         }
//     };

//     const cadastrar = (nome, email, senha) => {

//         try{
//             const response = await axios.post('http://localhost:3000/pessoa',{
//                 nome,
//                 email,
//                 senha
//             });
//         }
        
//         const hasUser = usersStorage?.filter((user) => user.email === email);

//         if(hasUser?.length){
//             return "Já existe uma conta com esse E-mail";
//         }

//         let newUser;

//         if(usersStorage){
//             newUser = [...usersStorage, {nome,email,senha}];
//         }else{
//             newUser = [{nome,email,senha}];
//         }

//         localStorage.setItem("users_db",JSON.stringify(newUser));

//         return;
//     };

//     const sair = () => {
//         setUser(null);
//         localStorage.removeItem("user_token");
//     }

//     return(
//         <AuthContext.Provider
//         value={{ user, cadastrado: !!user, acessar, cadastrar, sair}}>
//             {Children}
//         </AuthContext.Provider>
//     ); 
// };

// import { createContext, useEffect, useState } from "react";
// import axios from 'axios';

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const userToken = localStorage.getItem("user_token");
//         if (userToken) {
//             setUser(JSON.parse(userToken));
//         }
//     }, []);

//     const acessar = async (email, senha) => {
//         try {
//             const response = await axios.post('http://localhost:3000/login', { email, senha });
//             if (response.status === 200) {
//                 const { token, user } = response.data;
//                 localStorage.setItem("user_token", JSON.stringify({ email, token }));
//                 setUser(user);
//                 return null;
//             } else {
//                 return "E-mail ou senha incorretos";
//             }
//         } catch (error) {
//             return "Erro ao acessar";
//         }
//     };

//     const cadastrar = async (nome, email, senha) => {
//         try {
//             const verificaResponse = await axios.get(`http://localhost:3000/pessoa?email=${email}`);
//             if (verificaResponse.data) {
//                 return "Já existe uma conta com esse E-mail";
//             }

//             const response = await axios.post('http://localhost:3000/pessoa', { nome, email, senha });

//             if (response.status === 201) {
//                 return null;
//             } else {
//                 return "Erro ao cadastrar usuário";
//             }
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 return error.response.data;
//             }
//             return "Erro ao cadastrar usuário";
//         }
//     };

//     const sair = () => {
//         setUser(null);
//         localStorage.removeItem("user_token");
//     };

//     return (
//         <AuthContext.Provider value={{ user, cadastrado: !!user, acessar, cadastrar, sair }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// import { createContext, useEffect, useState } from "react";
// import axios from 'axios';
// import {fetchPessoas } from '../api';


// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {

//     const [pessoas, setPessoas] = useState([]);

//     const loadPessoas = async () => {
//         const pessoasData = await fetchPessoas();
//         setPessoas(pessoasData);
//       };

//       useEffect(() => {
//         loadPessoas();
//         const interval = setInterval(loadPessoas, 2000);
//         return () => clearInterval(interval);
//       }, []);



//     const acessar = async (email, senha) => {
//         try {
//             const response = await axios.post('http://localhost:3000', { email, senha });
//             const { token, pessoas } = response.data;
//             localStorage.setItem("pessoas_token", JSON.stringify({ email, token }));
//             setPessoas(pessoas);
//             return null;
//         } catch (error) {
//             if (error.response && error.response.status === 401) {
//                 return "E-mail ou senha incorretos";
//             } else {
//                 return "Erro ao acessar";
//             }
//         }
//     };

//     const cadastrar = async (nome, email, senha) => {
//         try {
//             const verificaResponse = await axios.get(`http://localhost:3000/pessoa?email=${email}`);
//             if (verificaResponse.data) {
//                 return "Já existe uma conta com esse E-mail";
//             }

//             await axios.post('http://localhost:3000/pessoa', { nome, email, senha });
//             return null;
//         } catch (error) {
//             if (error.response && error.response.status === 400) {
//                 return "Erro ao cadastrar usuário";
//             } else {
//                 return "Erro ao cadastrar usuário";
//             }
//         }
//     };

//     const sair = () => {
//         setPessoas(null);
//         localStorage.removeItem("pessoas_token");
//     };

//     return (
//         <AuthContext.Provider value={{ pessoas, cadastrado: !!pessoas, acessar, cadastrar, sair }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';
import { fetchPessoas } from '../api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        const loadPessoas = async () => {
            try {
                const pessoasData = await fetchPessoas();
                setPessoas(pessoasData);
            } catch (error) {
                console.error('Erro ao carregar pessoas:', error);
            }
        };

        loadPessoas(); // Carrega as pessoas uma vez quando o componente é montado
        const interval = setInterval(loadPessoas, 2000); // Atualiza a lista de pessoas a cada 2 segundos
        return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
    }, []);

    const acessar = async (email, senha) => {
        try {
            const response = await axios.post('http://localhost:3000', { email, senha });
            const { token, pessoas } = response.data;
            localStorage.setItem("pessoas_token", JSON.stringify({ email, token }));
            setPessoas(pessoas);
            return null;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                return "E-mail ou senha incorretos";
            } else {
                return "Erro ao acessar";
            }
        }
    };

    const cadastrar = async (nome, email, senha) => {
        try {
            const verificaResponse = await axios.get(`http://localhost:3000/pessoa?email=${email}`);
            if (verificaResponse.data) {
                return "Já existe uma conta com esse E-mail";
            }

            await axios.post('http://localhost:3000/pessoa', { nome, email, senha });
            return null;
        } catch (error) {
            if (error.response && error.response.status === 400) {
                return "Erro ao cadastrar usuário";
            } else {
                return "Erro ao cadastrar usuário";
            }
        }
    };

    const sair = () => {
        setPessoas([]);
        localStorage.removeItem("pessoas_token");
    };

    return (
        <AuthContext.Provider value={{ pessoas, cadastrado: !!pessoas, acessar, cadastrar, sair }}>
            {children}
        </AuthContext.Provider>
    );
};


 
