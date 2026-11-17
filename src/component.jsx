import React from 'react';
import {Box, Text, Newline} from 'ink';
import SelectInput from 'ink-select-input';
import open from 'open';
import items from './items.js';

const handleOpen = url => open(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		handleOpen(item.url);
	}

	if (item.action) {
		item.action();
	}
};

export default () => (
	<Box flexDirection="column">
		<Newline/>
		<Box>
			<Text>Hello, I'm Masashi Hirano. Node.js Core Collaborator.</Text>
		</Box>
		<Newline/>
		<Text>About me {'>>'}</Text>
		<Newline/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</Box>
);
