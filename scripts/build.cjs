const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const vitePath = path.join(__dirname, '..', 'node_modules', '.bin', 'vite');
if (!fs.existsSync(vitePath)) {
  console.error('Error: Vite is not installed. Run "npm install" before building.');
  process.exit(1);
}

const build = spawn(vitePath, ['build'], { stdio: 'inherit' });
build.on('exit', (code) => process.exit(code));


