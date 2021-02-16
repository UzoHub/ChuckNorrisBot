const axios = require('axios');
module.exports = {
    name: 'jokeCategories',
    description: 'Affiche le nombre de joke ChuckNorris',
    execute(message) {    
        axios.get("http://api.icndb.com/categories")
            .then(response => message.channel.send("Les catégories disponibles sont les suivantes : "+response.data.value))
            .catch(error => console.log(error));
    }
  };