// Post-build: duplicate every "<route>.html" into "<route>/index.html" too.
// This lets nginx resolve a route whether try_files matches the flat file
// ($uri.html) or falls back to directory+index ($uri/index.html) - useful
// while diagnosing which branch of a try_files chain actually fires on
// the server, without risking a 403 if the flat-file branch isn't live yet.
const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');

function walk(dir, files = []) {
  for (const f of fs.readdirSync(dir)) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else if (f.endsWith('.html') && f !== 'index.html' && f !== '404.html') files.push(full);
  }
  return files;
}

const htmlFiles = walk(outDir);
let dupCount = 0;

for (const file of htmlFiles) {
  const dir = file.slice(0, -'.html'.length);
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    const target = path.join(dir, 'index.html');
    if (!fs.existsSync(target)) {
      fs.copyFileSync(file, target);
      dupCount++;
    }
  }
}

console.log(`dual-export: duplicated ${dupCount} route(s) into <route>/index.html`);
