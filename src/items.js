export default [
	{
		label: 'Website',
		value: 'website',
		url: 'https://shisama.dev'
	},
	{
		label: 'X: \u001b[36m@shisama_\u001b[0m',
		value: 'x',
		url: 'https://x.com/shisama_'
	},
	{
		label: 'GitHub: \u001b[33mshisama\u001b[0m',
		value: 'github',
		url: 'https://github.com/shisama'
	},
	{
		label: 'Facebook: \u001b[34mmasashi07\u001b[0m',
		value: 'facebook',
		url: 'https://www.facebook.com/masashi07'
	},
	{
		label: 'Qiita: \u001b[32mshisama\u001b[0m',
		value: 'qiita',
		url: 'https://qiita.com/shisama/'
	},
	{
		label: 'dev.to: \u001b[35mshisama\u001b[0m',
		value: 'devto',
		url: 'https://dev.to/shisama'
	},
	{
		label: 'Slides',
		value: 'slides',
		url: 'https://speakerdeck.com/masashi'
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		value: 'quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];
