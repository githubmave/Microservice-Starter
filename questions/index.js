const express = require('express');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());

const questions={};

app.get('/questions',(req,res) => {

    res.send(req.body);

});

app.post('/questions',(req,res)=>{
    const id =234;

    const content = req.body.content;
    
    questions[id]={
        id,
        content

    };
    res.status(201).send(questions[id]);
});

app.listen(4002,() =>{
    console.log("Listening to port 4002")
});