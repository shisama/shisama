'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const items = require('./items');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>Hello, I'm Masashi Hirano. Node.js Core Collaborator.</Text>
		</div>
		<br/>
		<Text>About me >></Text>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
