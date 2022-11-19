const express = require('express');
const bodyParser = require("body-parser")

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));


app.get('/', (req,res)=>{
    res.send({message: "That's it!"})
})

app.get('/instructor', (req, res)=>{
res.json('Elie')

});

app.post('/post', (req,res)=>{
    items.push(req.body)
    console.log(items)
    res.status(201).send('item successfully added')
    
})

app.post('/user', (req, res)=>{
    console.log(req.body)
    res.json(req.body )
});

app.get('/student/', (req, res) => {
    // const name = req.query.firstName
    if (req.query.firstName.toLowerCase() === 'faruq') {
        res.status(200).send(`hello ${req.query.firstName} ${req.query.lastName}, stutern student1`);
    }
    else if (req.query.firstName.toLowerCase() === 'james') {
        res.status(200).send(`hello ${req.query.firstName} ${req.query.lastName}, stutern student2`);
    }

    else {
        res.status(200).send(`welcome ${req.query.firstName} ${req.query.lastName}, to the class`);
    }
});

app.get('/user/:name', (req, res)=>{
    res.send({message: `hello ${req.params.name}`});
});

app.get('/instructor/:firstName/:lastNames', (req, res)=>{
    res.send(`The name of this instructor is ${req.params.firstName + ' '+ req.params.lastNames}`);
   })

app.listen(3000, function() {
    console.log('listening in port 3000');

})









