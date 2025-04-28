const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));
app.get('/about', (req, res) => res.sendFile(__dirname + '/public/about.html'));

app.listen(3000, () => console.log(`Listening on port 3000`);
}); 
