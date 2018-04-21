const { Command } = require('discord.js-commando');
const Random = require('random-js');

module.exports = class ShipCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ship',
			group: 'analyze',
			memberName: 'ship',
			description: 'Ships two users together.',
			args: [
				{
					key: 'first',
					label: 'first user',
					prompt: 'Who is the first user in the ship?',
					type: 'user'
				},
				{
					key: 'second',
					label: 'second user',
					prompt: 'Who is the second user in the ship?',
					type: 'user'
				}
			]
		});
	}

	run(msg, { first, second }) {
		const random = new Random(Random.engines.mt19937().seed(first.id - second.id));
		return msg.say(`I'd give ${first.username} and ${second.username} a ${random.integer(0, 100)}%!`);
	}
};