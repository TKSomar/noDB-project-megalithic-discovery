const express = require('express');
const app = express();
const ctrl = require('./controller');
const SERVER_PORT = 4020;

app.use(express.json());
app.use(express.static(__dirname + "/../build"));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
});

app.get('/api/megaliths', ctrl.getAllMegaliths);
app.get('/api/megaliths/:megalith_name', ctrl.getMegalithByName);
app.post('/api/megaliths/', ctrl.createMegalith);
app.put('/api/megaliths/:megalith_id', ctrl.editMegalithName);
app.delete('/api/megaliths/:megalith_id', ctrl.deleteMegalith);

app.listen(SERVER_PORT, () =>
    console.log(`Server is running on port: ${SERVER_PORT}`)
)