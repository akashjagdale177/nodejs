const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello successfully deploy nodejs project on kubernetes minikube through Jenkins 🚀');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
