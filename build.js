import * as baseTheme from 'jsonresume-theme-even';
import resume from './resume.json';
import fs from 'fs';

async function build() {
  const html = await baseTheme.render(resume);
  // clear dist folder if it exists
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true });
  }
  fs.mkdirSync('dist');
  fs.writeFileSync('dist/index.html', html);
  console.log('Build complete');
}
build();