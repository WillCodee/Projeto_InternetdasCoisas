// import React, { useState } from 'react';
// import lampadaLigada from  '../imgs/lampada-de-ideia (1).png'
// import lampadaDesligada from '../imgs/lampada-de-ideia.png';
// import '../css/cadastrarLampada.css'
// const API_URL = 'http://localhost:3001/lampada';


// export const lampada1 = async (mensagem) => {
//     await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({mensagem}), 
//     })
//     console.log("parabens")
// };


// const Lampada = ({onChange}) => {
//     const [ligado, setLigado] = useState(false);

//     const onClickHandler = () => {
//         setLigado(!ligado);
//         onChange && onChange(!ligado);
//         lampada1(!ligado);
//         alert('mudou');
//       };

//     return (
//         <div className="lampada">
//             <h1 className="titulo">Lampada</h1>
//             <img className="imagem" src={ligado ? lampadaLigada : lampadaDesligada} alt="lampada" />
//             <div className="switch" onClick={onClickHandler} style={{ backgroundColor: ligado ? 'green' : 'red', color: 'white' }}>
//       <div style={{ left: ligado ? '72%' : '3px' }}></div>
//       <div style={{ left: ligado ? 0 : '-100%' }}></div>
//             <span className='label'>{ligado ? 'Ligado' : 'Desligado'}</span>
//             </div>
//         </div>



//     );
// }

// export default Lampada;



