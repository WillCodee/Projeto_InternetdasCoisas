import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/menuHome.css'  
import Image from '../imgs/smarthome-1@2x.png'; 

function MenuHome() {
  const [sala, setSala] = useState('');
  const [quarto, setQuarto] = useState('');
  const [cozinha, setCozinha] = useState('');
  const [banheiro, setBanheiro] = useState('');
  const navigate = useNavigate();

  /**
   * Este é um componente React chamado MenuHome. Ele usa o hook useState para criar estados para sala, quarto, cozinha e
   *  banheiro. Cada um desses estados é inicializado como uma string vazia.

O hook useNavigate do react-router-dom é usado para navegar entre as rotas da aplicação.

Existem quatro funções de manipulação de eventos: handleSalaChange, handleQuartoChange, handleCozinhaChange e
 handleBanheiroChange. Cada uma delas é acionada quando o valor do respectivo select é alterado.

Se o valor selecionado for 'lampada', a função fará uma solicitação fetch para a rota correspondente 
(por exemplo, /lampada/sala para handleSalaChange). Se a solicitação for bem-sucedida, ela irá registrar o ID da lâmpada
 na console e navegará para a rota /lampada/${data.id}.

No retorno do componente, há um formulário com quatro campos select, cada um correspondendo 
a uma sala (sala, quarto, cozinha, banheiro). Cada select tem um manipulador de eventos onChange associado à 
respectiva função de manipulação de eventos.

Por fim, o componente MenuHome é exportado para ser usado em outros lugares da aplicação.

Por favor, note que este código assume que o servidor irá responder com um objeto JSON que contém um campo 
id quando uma solicitação fetch for feita. Se o servidor não responder dessa maneira, o código pode não funcionar 
como esperado. Além disso, as rotas usadas nas solicitações fetch (/lampada/sala, /lampada/quarto, etc.) 
devem existir no servidor. Se não existirem, as solicitações fetch falharão.
   */

  const handleSalaChange = async (event) => {
    setSala(event.target.value);
    const selectedValue = event.target.value;
    if (selectedValue === 'lampada') {
      try {
        const response = await fetch('/lampada/sala');
        const data = await response.json();
        console.log(`ID da lampada da sala: ${data.id}`);
        navigate(`/lampada/${data.id}`);
        
      }catch(error){
        console.error(error);

      }
    
    }
  };

  
  const handleQuartoChange = async (event) => {
    setQuarto(event.target.value);
    const selectedValue = event.target.value;
    if (selectedValue === 'lampada') {
      try {
        // Requisição para 'quarto'
        const responseQuarto = await fetch('/lampada/quarto');
        const dataQuarto = await responseQuarto.json();
        console.log(`ID da lampada do quarto: ${dataQuarto.id}`);
        navigate(`/lampada/${dataQuarto.id}`);
      }catch(error){
        console.error(error);

      }
    }
  };

  const handleCozinhaChange =  async (event) => {
    setCozinha(event.target.value);
    const selectedValue = event.target.value;
    if (selectedValue === 'lampada') {
      try{
        const responseCozinha = await fetch('/lampada/cozinha');
          const dataCozinha = await responseCozinha.json();
          console.log(`ID da cozinha: ${dataCozinha.id}`);
          navigate(`/lampada/${dataCozinha.id}`);


      }catch(error){
        console.error(error)
      }
      
    }
  };

  const handleBanheiroChange = async (event) => {
    setBanheiro(event.target.value);
    const selectedValue = event.target.value;
    if (selectedValue === 'lampada') {
      try{
        const responseBanheiro = await fetch('/home/lampada/banheiro');
          const dataBanheiro = await responseBanheiro.json();
          console.log(`ID do banheiro: ${dataBanheiro.id}`);
          navigate(`/home/lampada`); // Redirecionar para /lampada

      }catch(error){
        console.error(error);
      }
     
    }
  };

  return (
    <div className='MenuHome'> 

    
    <div>
    
    <div className="combobox">
      <label>Sala</label>
      <button onClick={() => navigate('/home/lampada1')}>Lâmpada</button>
      <button>Televisão</button>
      <button>Ar-condicionado</button>
      </div>

        <div className="combobox">    
          <label>Quarto:</label>
          <button onClick={() => navigate('/home/lampada2')} >Lampada</button>
          <button>Ar-condicionado</button>
          
        </div> 
        <div className="combobox">
          <label>Cozinha:</label>
            <button onClick={() => navigate('/home/lampada3')}>Lampada</button>
            <button>Geladeira</button>
            
        </div>
        <div className="combobox">
          <label>Banheiro:</label>
          <button onClick={() => navigate('/home/lampada4')}>Lampada</button>
          <button>Chuveiro</button>
        </div>
      </div>
      </div>
   
  );
}

export default MenuHome;