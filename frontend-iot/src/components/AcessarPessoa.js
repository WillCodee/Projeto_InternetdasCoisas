// import Image from '../imgs/smarthome-1@2x.png'; // Atualize isso para o nome da sua imagem
// import React, {useState} from 'react';
// import { createPessoa } from '../api';
// import { Link, useNavigate } from 'react-router-dom';
// import '../css/cadastrarPessoa.css'
// import useAuth from '../contexts/useAuth';



// const Acessar = () => {
// const {acessar} = useAuth();

  
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [error, setError] = useState("");
//   const navigate = useNavigate();



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await createPessoa({ email, senha });
//     setEmail('');
//     setSenha('');
//     navigate('/Home'); // Navega para a página "MenuHome"

//     if(!email | !senha){
//       setError("Preencha todos os campos");
//       return;
//     }

//     const res = acessar(email,senha);

//     if(res){
//       setError(res);
//       return;
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <img src={Image} alt="Descrição da Imagem" style={{ width: '100px', height: '100px' }} />
//       <h1>Acesse ao SmartHome</h1>
//       <form >
     
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => [setEmail(e.target.value), setError("")]}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={senha}
//           onChange={(e) => [setSenha(e.target.value), setError("")]}
//           placeholder="Senha"
//         />
//         <label>{error}</label>
//         <button onClick={(handleSubmit) => navigate('/Home')} type="button">Entrar no SmartHome</button>

//         <h3><label style={{color: 'white'}}>Não tem uma conta? <Link style={{color: '#007BFF'}} to="/cadastrar">&nbsp;Cadastre-se</Link> </label></h3>
//       </form>
//     </div>
//   );
// }

// export default Acessar;

// import Image from '../imgs/smarthome-1@2x.png'; // Atualize isso para o nome da sua imagem
// import React, { useState } from 'react';
// import { createPessoa } from '../api';
// import { Link, useNavigate } from 'react-router-dom';
// import '../css/cadastrarPessoa.css';
// import useAuth from '../contexts/useAuth';

// const Acessar = () => {
//   const { acessar } = useAuth();
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !senha) {
//       setError("Preencha todos os campos");
//       return;
//     }

//     const res = acessar(email,senha);

//     try {
//       // await createPessoa({ email, senha });
//       setEmail('');
//       setSenha('');
//       navigate('/home'); // Navega para a página "Home"
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <img src={Image} alt="Descrição da Imagem" style={{ width: '100px', height: '100px' }} />
//       <h1>Acesse ao SmartHome</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => [setEmail(e.target.value), setError("")]}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={senha}
//           onChange={(e) => [setSenha(e.target.value), setError("")]}
//           placeholder="Senha"
//         />
//         <label>{error}</label>
//         <button type="submit">Entrar no SmartHome</button>
//         <h3><label style={{ color: 'white' }}>Não tem uma conta? <Link style={{ color: '#007BFF' }} to="/cadastrar">&nbsp;Cadastre-se</Link> </label></h3>
//       </form>
//     </div>
//   );
// }

// export default Acessar;

// import Image from '../imgs/smarthome-1@2x.png'; // Atualize isso para o nome da sua imagem
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../css/cadastrarPessoa.css';
// import useAuth from '../contexts/useAuth';

// const Acessar = () => {
//   const { acessar } = useAuth();
//   const [email, setEmail] = useState('');
//   const [senha, setSenha] = useState('');
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !senha) {
//       setError("Preencha todos os campos");
//       return;
//     }

//     const res = acessar(email,senha);

//         if(res){
//           setError(res);
//           return;
//         }

//     try {
//       const errorMsg = await acessar(email, senha); // Aguarda o resultado da autenticação
//       if (errorMsg) {
//         setError(errorMsg);
//       } else {
//         setEmail('');
//         setSenha('');
//         navigate('/home'); // Navega para a página "Home" se a autenticação for bem-sucedida
//       }
//     } catch (error) {
//       setError("Erro ao acessar");
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <img src={Image} alt="Descrição da Imagem" style={{ width: '100px', height: '100px' }} />
//       <h1>Acesse ao SmartHome</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={email}
//           onChange={(e) => [setEmail(e.target.value), setError("")]}
//           placeholder="Email"
//         />
//         <input
//           type="password"
//           value={senha}
//           onChange={(e) => [setSenha(e.target.value), setError("")]}
//           placeholder="Senha"
//         />
//         <label style={{ color: 'red' }}>{error}</label>
//         <button type="submit">Entrar no SmartHome</button>
//         <h3><label style={{ color: 'white' }}>Não tem uma conta? <Link style={{ color: '#007BFF' }} to="/cadastrar">&nbsp;Cadastre-se</Link> </label></h3>
//       </form>
//     </div>
//   );
// }

// export default Acessar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../contexts/useAuth'; // Importe o contexto de autenticação
import Image from '../imgs/smarthome-1@2x.png'; // Atualize isso para o nome da sua imagem

const Acessar = () => {
  const { acessar } = useAuth(); // Obtenha a função de autenticação do contexto
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    try {
      const errorMsg = await acessar(email, senha); // Chame a função de autenticação
      if (errorMsg) {
        setError(errorMsg);
      } else {
        setEmail('');
        setSenha('');
        navigate('/home'); // Navegue para a página "Home" se a autenticação for bem-sucedida
      }
    } catch (error) {
      setError("Erro ao acessar");
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={Image} alt="Descrição da Imagem" style={{ width: '100px', height: '100px' }} />
      <h1>Acesse ao SmartHome</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Corrija a função de alteração do email
          placeholder="Email"
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)} // Corrija a função de alteração da senha
          placeholder="Senha"
        />
        <label style={{ color: 'red' }}>{error}</label>
        <button type="submit">Entrar no SmartHome</button>
        <h3><label style={{ color: 'white' }}>Não tem uma conta? <Link style={{ color: '#007BFF' }} to="/cadastrar">&nbsp;Cadastre-se</Link> </label></h3>
      </form>
    </div>
  );
}

export default Acessar;
