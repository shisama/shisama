module.exports = [
	{
		label: 'Website',
		url: 'https://shisama.github.io'
	},
	{
		label: 'Twitter: \u001b[36m@shisama_\u001b[0m',
		url: 'https://twitter.com/shisama_'
	},
	{
		label: 'GitHub: \u001b[33mshisama\u001b[0m',
		url: 'https://github.com/shisama'
	},
	{
		label: 'Facebook: \u001b[34mmasashi07\u001b[0m',
		url: 'https://www.facebook.com/masashi07'
	},
	{
		label: 'Qiita: \u001b[32mshisama\u001b[0m',
		url: 'https://qiita.com/shisama/'
	},
	{
		label: 'dev.to: \u001b[35mshisama\u001b[0m',
		url: 'https://dev.to/shisama'
	},
	{
		label: 'Slides',
		url: 'https://speakerdeck.com/masashi'
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
]
