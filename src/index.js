const createExpressApp = require('express');

const app = createExpressApp();

const port = 3001;


// When a GET request is made to the root URL, the callback function is executed. 
app.get('/', (req,res)=> {res.send('Hello, World');});

// starts the server and makes it listen on the specified port. 
// logs to the console server is running and listening on the specified port.
app.listen(port,()=> {console.log(`Example app listening on port ${port}!`);});



