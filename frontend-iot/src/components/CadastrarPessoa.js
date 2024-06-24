
import Image from '../imgs/smarthome-1@2x.png'; // Atualize isso para o nome da sua imagem
import React, { useState } from 'react';
import { createPessoa } from '../api';
import { Link, useNavigate } from 'react-router-dom';
import '../css/cadastrarPessoa.css';



function CadastrarPessoa() {
  
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!nome | !email | !senha){
             alert("Preencha todos os campos");
             return;
          } 

        await createPessoa({ nome, email, senha });
        setNome('');
        setEmail('');
        setSenha('');
        navigate('/home');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Image} alt="Descrição da Imagem" style={{ width: '100px', height: '100px' }} />


            <h1>Cadastre-se no SmartHome</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Nome"
                />
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha"
                />
                {/* <label style={{ color: 'red' }}>{error}</label> */}
                <button type="submit">Cadastrar</button>
                
            </form>
        </div>
    );
}

export default CadastrarPessoa;
