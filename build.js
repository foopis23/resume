import * as theme from './theme.js';
import resume from './resume.json';
import fs from 'fs';

async function build() {
  const html = await theme.render(resume);
  // clear dist folder if it exists
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true });
  }
  fs.mkdirSync('dist');
  fs.writeFileSync('dist/index.html', html);
  console.log('Build complete');
}
build();