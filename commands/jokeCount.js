const axios = require('axios');
module.exports = {
    name: 'jokeCount',
    description: 'Affiche le nombre de joke ChuckNorris',
    execute(message) {    
        axios.get("http://api.icndb.com/jokes/count")
            .then(response => message.channel.send("Il y a "+response.data.value+" jokes de Chunck Norris !"))
            .catch(error => console.log(error));
    }
  };