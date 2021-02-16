const axios = require('axios');
module.exports = {
    name: 'joke',
    description: 'Affiche une joke ChuckNorris',
    getJoke(url,message){
        axios.get(url)
        .then(response => {
            if (response.data.type === 'success') message.channel.send(response.data.value.joke);
            else message.channel.send(response.data.value);
        })
        .catch(error => console.log(error));
    },
    execute(message, args) { 
        if (args.length){
            if (args.length == 1 && Number(args[0])){
                this.getJoke("http://api.icndb.com/jokes/"+args[0],message);
            }else{
                this.getJoke('http://api.icndb.com/jokes/random?limitTo='+args,message);
            }
        }else {
            this.getJoke("http://api.icndb.com/jokes/random",message);
        }
    }
  };