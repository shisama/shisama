#!/usr/bin/env node
import path from 'path';
import {fileURLToPath} from 'url';
import meow from 'meow';
import termImg from 'term-img';
import terminalImage from 'terminal-image';
import React from 'react';
import {render} from 'ink';
import UI from './component.jsx';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

meow(`
	Usage
	  $ npx shisama
`, {
	importMeta: import.meta
});

const fallback = async () => {
	const image = await terminalImage.file(path.join(__dirname, 'avatar.png'));
	console.log(image);
};

console.log(termImg(path.join(__dirname, 'avatar.png'), {fallback}));

render(React.createElement(UI));
