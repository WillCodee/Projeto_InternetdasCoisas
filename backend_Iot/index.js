
(async ()=>{
    const database = require('./db');
    const mqtt = require('./mqtt');
    const Lampada = require('./lampadas')
    const Pessoa = require('./pessoas')
    const express = require('express');
    const app = express();
    await database.sync();
    const port = 3001;
    const cors = require('cors');

    //midlewere parse jason
    app.use(cors());
    app.use(express.json());

    //midlewere parse cors
  

      /*CRUD BÁSICO
      
      Crud utilizando Sequelize
      API  utlizando Express

      */ 

      //CRUD PESSOA

      app.get('/pessoa', async (req, res) => {
        const pessoas = await Pessoa.findAll();
        res.json(pessoas)
      })


      app.get('/pessoa/:id', async (req, res) => {
        const id = parseInt(req.params.id);
        const pessoa = await Pessoa.findByPk(id);
        res.json(pessoa);
      })


      app.post('/pessoa', async (req , res) =>{
        const {nome,email,senha} = req.body;
        try{
          await Pessoa.create({
            nome:nome,
            email: email,
            senha: senha   
          });
          res.status(201).send('Pessoa cadastrada com sucesso')
        }catch (error) {
          console.error(error);
          res.status(500).send('Erro ao cadastradar Pessoa')
        }
      });

      app.delete('/pessoa/:id', async (req, res) => {
        const id = parseInt(req.params.id);

        try{
          await Pessoa.destroy({
            where: {id:id},
            truncate: true
          })
          res.status(201).send('Usuario excluido com sucesso!');

        }catch(error){
          console.error(error);
          res.status(500).send('Erro ao excluir usuario.')

        }
      });


      app.put('/pessoa/:id', async (req, res) => {

        const { nome, senha, email} = req.body;
        const id = parseInt(req.params.id);

        try {

            const Pessoa = await Pessoa.findByPk(id);
            Pessoa.nome = nome
            Pessoa.senha = senha
            Pessoa.email = email
            Pessoa.save();

            res.status(201).send('Dados Atualizados com sucesso');

          } catch (error) {
            console.error(error);
            res.status(500).send('Erro ao Atualizar Dados da Pessoa');

          }
       });

      //Crud Lampada
      app.get('/lampada', async (req, res) => {
        const lampadas = await Lampada.findAll();
        res.json(lampadas);
      });

     

      app.get('/lampada/:id', async (req, res)=>{
        const id = parseInt(req.params.id);
        const lampada = await Lampada.findByPk(id);
        res.json(lampada);
      });

      
      app.post('/lampada1', async (req, res) =>{
        const {mensagem} = req.body;
        const topic = 'SLAROK/led1'
        mqtt.publish(topic,mensagem, { qos: 0, retain: true }, (error) => {
        })
      });

      app.post('/lampada2', async (req, res) =>{
        const {mensagem} = req.body;
        const topic = 'SLAROK/led2'
        mqtt.publish(topic,mensagem, { qos: 0, retain: true }, (error) => {
        })
      });


      app.post('/lampada3', async (req, res) =>{
        const {mensagem} = req.body;
        const topic = 'SLAROK/led3'
        mqtt.publish(topic,mensagem, { qos: 0, retain: true }, (error) => {
        })
      });

      app.post('/lampada4', async (req, res) =>{
        const {mensagem} = req.body;
        const topic = 'SLAROK/led4'
        mqtt.publish(topic,mensagem, { qos: 0, retain: true }, (error) => {
        })
      });


      app.delete('/lampada/:id', async (req, res) => {
        const id = parseInt(req.params.id);

        try{
            await Lampada.destroy({
                where: {id:id},
                truncate: true
            })
            res.status(201).send('Lampada Excluida com Sucesso!');
        }catch(error){
            console.error(error);
            res.status(500).send('Erro ao Excluir a Lampada');
        }
      });

       /*MQTT GRAVANDO NO BANCO
      
        mqtt + sequelize

      */

        const topic = 'SLAROK/Leds'

        mqtt.on('connect',()=>{
            console.log('Connected')
            mqtt.subscribe([topic], ()=>{
                console.log(`Subscribe to topic '${topic}'`)
            })
        })

        /* Callback para inserir quando receber uma mensagem nova via MQTT*/ 
        mqtt.on('message',async (topic, payload)=>{
            console.log('Received Message:',topic, payload.toString());

            await Lampada.create({
                nome:payload.toString(),
                estado: payload.toString(),
                kw: payload.toString()
            });

            if (mensagem === "led1off"){
              console.log("Alterando saída do LED 1 para desligado")
              digitalWrite(led1, LOW);
            }else if(mensagem === "led1on"){
              console.log("Alterando saída do LED 1 para ligado")
              digitalWrite(led1, HIGH);
            }

            if (mensagem === "led2off"){
              console.log("Alterando saída do LED 2 para desligado")
              digitalWrite(led2, LOW);
            }else if(mensagem === "led2on"){
              
              console.log("Alterando saída do LED 2 para ligado")
              digitalWrite(led2, HIGH);
            }

            if (mensagem === "led3off"){
              console.log("Alterando saída do LED 3 para desligado")
              digitalWrite(led3, LOW);
            }else if(mensagem === "led3on"){
              console.log("Alterando saída do LED 3 para ligado")
              digitalWrite(led3, HIGH);
            }

            if (mensagem === "led4off"){
              console.log("Alterando saída do LED 4 para desligado")
              
              digitalWrite(led4, LOW);
            }else if(mensagem === "led4on"){
              console.log("Alterando saída do LED 4 para ligado")
              digitalWrite(led4, HIGH);
            }

        })

        app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
})();