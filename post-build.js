import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'node-html-parser';

function injectCss(htmlFile, cssFile) {
	const htmlSrc = readFileSync(htmlFile, 'utf8');
	const cssSrc = readFileSync(cssFile, 'utf8');
	const root = parse(htmlSrc);

	const head = root.querySelector('head');
	const style = parse(`<style>${cssSrc}</style>`)
	head.appendChild(style);

	writeFileSync(htmlFile, root.toString());

	console.log(`Injected ${cssFile} into ${htmlFile}`);
}

const htmlFile = process.argv[2];
const cssFile = process.argv[3];

injectCss(htmlFile, cssFile);
