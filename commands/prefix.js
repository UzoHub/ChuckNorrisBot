module.exports = {
    name: 'prefix',
    description: 'Change le prefix des commandes.',
    execute(message,args) {
        const fs = require('fs');
        let config = require('../config.json');
        if (args.length == 1) {
            config.prefix = args[0];
            let configJson = JSON.stringify(config)
            fs.writeFile('./config.json', configJson, (erreur) => {
                if (erreur) message.channel.send(erreur);
                else message.channel.send("Le prefix des commandes est maintenant "+args[0]);
            })
        }else {
            message.channel.send("Veuillez saisir un seul prefix")
        }
    }
  };