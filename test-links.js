const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
console.log('Found HTML files:', htmlFiles);

let errors = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  
  // check local images
  const imgRegex = /src=["']([^"']+)["']/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    const src = match[1];
    if (!src.startsWith('http') && !src.startsWith('data:')) {
      const cleanPath = src.split('?')[0];
      if (!fs.existsSync(cleanPath)) {
        console.error(`File ${file} missing image: ${cleanPath}`);
        errors++;
      }
    }
  }

  // check local scripts
  const scriptRegex = /<script[^>]+src=["']([^"']+)["']/g;
  while ((match = scriptRegex.exec(content)) !== null) {
    const src = match[1];
    if (!src.startsWith('http')) {
      const cleanPath = src.split('?')[0];
      if (!fs.existsSync(cleanPath)) {
        console.error(`File ${file} missing script: ${cleanPath}`);
        errors++;
      }
    }
  }

  // check local links
  const hrefRegex = /href=["']([^"']+)["']/g;
  while ((match = hrefRegex.exec(content)) !== null) {
    const href = match[1];
    if (!href.startsWith('http') && !href.startsWith('tel:') && !href.startsWith('mailto:') && !href.startsWith('#')) {
      const cleanPath = href.split('?')[0].split('#')[0];
      if (cleanPath && !fs.existsSync(cleanPath)) {
        console.error(`File ${file} missing href target: ${cleanPath}`);
        errors++;
      }
    }
  }
}

if (errors === 0) {
  console.log('SUCCESS: All internal image paths, script tags, and links are valid!');
} else {
  console.log('Errors found:', errors);
}
