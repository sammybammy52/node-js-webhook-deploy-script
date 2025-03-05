const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Deploy frontend and backend
app.post('/deploy/frontend', (req, res) => {
    const secret = req.body.secret;
    if (secret !== 'yourpassword') return res.status(403).send('Unauthorized');

    const deployDir = '/www/wwwroot/yourdirectory'; // Change to your directory
    const commands = `
        cd ${deployDir} && git reset --hard HEAD && git pull && npm install && npm run build --force
    `;

    exec(commands, (error, stdout, stderr) => {
        if (error) return res.status(500).send(`Deployment failed: ${error.message}`);
        console.log(stdout);
        res.send('Web deployment successful!');
    });
});

// Deploy Backend
app.post('/deploy/backend', (req, res) => {
    const secret = req.body.secret;
    if (secret !== 'yourpassword') return res.status(403).send('Unauthorized');

    const deployDir = '/www/wwwroot/yourdirectory'; // Change to your backend directory
    const commands = `
        cd ${deployDir} && git reset --hard HEAD && git pull && npm install && npx sequelize-cli db:migrate && pm2 restart app.js
    `;

    exec(commands, (error, stdout, stderr) => {
        if (error) return res.status(500).send(`Deployment failed: ${error.message}`);
        console.log(stdout);
        res.send('Backend deployment successful!');
    });
});

const PORT = 3005;
app.listen(PORT, () => console.log(`Deployment server running on port ${PORT}`));
