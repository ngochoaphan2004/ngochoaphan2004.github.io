const fs = require('fs');
const glb = fs.readFileSync('d:/portfolio/anti/character.glb');
const base64 = glb.toString('base64');
const out = `window.MODEL_DATA = "data:application/octet-stream;base64,${base64}";\n`;
fs.writeFileSync('d:/portfolio/anti/modelData.js', out);
console.log('Converted character.glb to modelData.js');
