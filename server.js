const express = require('express');
const jokeApi = require('sv443-joke-api');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(request, response){
  response.sendFile(__dirname + "/index.html");
});


app.post('/', function(request, response){



  jokeApi.getJokes({
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      response.send(data.joke || (data.setup + "\n " + data.delivery))
    });

});

app.listen(port, function(){
  console.log("Listening port: " + port);
});
