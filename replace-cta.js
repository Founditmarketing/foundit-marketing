const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
let changed = 0;

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    if (content.includes('href="/contact"')) {
        content = content.replace(/href="\/contact"/g, 'href="https://marketerhire.typeform.com/to/jIDTK2kL"');
        fs.writeFileSync(f, content);
        changed++;
        console.log('Modified', f);
    }
});

console.log('Total changed:', changed);
