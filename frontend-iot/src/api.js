


const API_URL = 'http://localhost:3001/lampada';

const API_URL_Pessoa = 'http://localhost:3001/pessoa';



export const fetchPessoas = async () => {
    const responde = await fetch(API_URL_Pessoa);
    return responde.json();
};

export const deletePessoa = async (id) =>{
    await fetch(`${API_URL_Pessoa}/${id}`, {method: 'DELETE'});
};

export const createPessoa = async (Pessoa) => {
    await fetch(API_URL_Pessoa,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Pessoa),
    });
};

export const updatePessoa = async (id, Pessoa) =>{
    await fetch(`${API_URL_Pessoa}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(Pessoa),
    });
};




export const fetchLampadas = async () => {
    const response = await fetch(API_URL);
    return response.json();
};


export const deleteLampada= async (id) =>{
    await fetch(`${API_URL}/${id}`,{method: 'DELETE'});
};

export const lampada1 = async (mensagem) => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({mensagem}), 
        })
        console.log("chegou na API");
};

export const lampada2 = async (mensagem) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({mensagem}), 
    })
    console.log("chegou na API");
};

export const lampada3 = async (mensagem) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({mensagem}), 
    })
    console.log("chegou na API");
};

export const lampada4 = async (mensagem) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({mensagem}), 
    })
    console.log("chegou na API");
};
 

export const createLampada = async (lampada) =>{
    await fetch(API_URL,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(lampada),
    });
};


export const updateLampada = async (id, lampada) =>{
    await fetch(`${API_URL}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(lampada),
    });
};






