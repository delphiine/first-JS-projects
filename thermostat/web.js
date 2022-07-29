const Thermostat = require('./Thermostat')
const thermostat = new Thermostat()
const express = require('express')
const app = express()
const port = 3000

app.get('/temperature', (req, res) => {
    res.send(JSON.stringify(thermostat));
});

app.post('/up', (req, res) => {
  thermostat.up();
  res.send(JSON.stringify(thermostat));
});

app.post('/down', (req, res) => {
    thermostat.down();
    res.send(JSON.stringify(thermostat));
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.send(JSON.stringify(thermostat));
});

// turns on the power saving mode if it's off and vice versa
app.post('/power-saving', (req, res) => {
    thermostat.setPowerSavingMode();
    res.send(JSON.stringify(thermostat));
});


console.log(`Server listening on localhost:${port}`);
app.listen(port);