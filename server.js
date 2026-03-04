const express = require('express');
const path = require('path');
const os = require('os');  // ← NUEVO

const app = express();
const PORT = 3002;  // ← PUERTO LIBRE

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  // ← DETECTA IP AUTOMÁTICO
  const interfaces = os.networkInterfaces();
  const ip = Object.values(interfaces)
    .flat()
    .find(i => i.family === 'IPv4' && !i.internal)?.address || '192.168.18.1';
    
  console.log(`✅ Servidor corriendo en:`);
  console.log(`   → http://localhost:${PORT}`);
  console.log(`   → http://${ip}:${PORT}`);  // ← TU IP REAL
  console.log(`   → http://0.0.0.0:${PORT}`);
});
