module.exports = {
    name: 'help',
    description: 'Test Command.',
    execute(message) {
    let { prefix } = require('../config.json');
    message.channel.send(`Commandes disponibles : 
      **${prefix}joke** - Affiche une joke random
      **${prefix}joke id** - Affiche la joke demandée
      **${prefix}joke categories** - Affiche une joke d'une ou plusieurs catégories
      **${prefix}jokeCategories** - Affiche les categories disponibles
      **${prefix}jokeCount** - Affiche le nombre de joke total
      **${prefix}ping** - Affiche le ping 
      **${prefix}prefix p** - Change le prefix des commandes du bot`);
    }
  };