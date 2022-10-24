const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Proacademy');
});
app.listen(port, () => {
    console.log('prpro', port);
})
