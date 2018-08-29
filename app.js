let express = require('express'),
    app = express();

require('./src/api/rota')(app);

app.listen(666, () => {
    console.log('Servidor rodando na porta', 666);
});
