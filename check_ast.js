import esprima

const fs = require('fs');

const code = fs.readFileSync('web/js/ui.js', 'utf-8');
const ast = esprima.parseModule(code, { range: true, loc: true });

const declared = new Set();
const used = new Set();

function walk(node) {
    if (!node) return;
    
    // Declarations
    if (node.type === 'VariableDeclarator') {
        declared.add(node.id.name);
    }
    if (node.type === 'FunctionDeclaration') {
        if (node.id) declared.add(node.id.name);
        node.params.forEach(p => declared.add(p.name));
    }
    if (node.type === 'ImportSpecifier' || node.type === 'ImportDefaultSpecifier') {
        declared.add(node.local.name);
    }
    
    // Usage
    if (node.type === 'Identifier') {
        used.add(node.name);
    }
    
    for (const key in node) {
        if (node[key] && typeof node[key] === 'object') {
            walk(node[key]);
        }
    }
}

walk(ast);

const missing = [];
const globals = new Set(['window', 'document', 'console', 'Math', 'setTimeout', 'clearTimeout', 'performance', 'URL', 'requestAnimationFrame', 'cancelAnimationFrame', 'Event', 'ImageData', 'Uint8Array', 'Uint8ClampedArray', 'Blob', 'File', 'Promise', 'Object', 'Array', 'String', 'Number', 'Boolean']);

for (const name of used) {
    if (!declared.has(name) && !globals.has(name)) {
        missing.push(name);
    }
}

console.log(missing.join(', '));
