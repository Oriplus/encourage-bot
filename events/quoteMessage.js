const {getQuote} = require("./../services/quoteAPI.js");
const {sadWords, encouragments} = require("./../constants/words.js");

module.exports = {
	name: 'messageCreate',
	async execute(message) {
		if(message.author.bot) return
		if (message.content.includes('$inspire')) {
			 message.channel.send( await getQuote());
		  }
		if(sadWords.some(word => message.content.includes(word))){
			const encouragement = encouragments[Math.floor(Math.random() * encouragments.length)];
			message.reply(encouragement);
		}
	},
};