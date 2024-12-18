const fs = require('fs');
const path = require('path');

const environmentContent = `
export const environment = {
    production: true,
    server: '${process.env.server}',
    serverAuth: '${process.env.serverAuth}',
    IpUrl: '${process.env.IpUrl}',
    locationByIp: '${process.env.locationByIp}',
    detailedLocation: '${process.env.detailedLocation}',
    userAgent: '${process.env.userAgent}'
};
`;

const environmentFilePath = path.join(__dirname, '../src/environments/environment.prod.ts');

fs.writeFileSync(environmentFilePath, environmentContent, { encoding: 'utf8' });
console.log('Environment file created at', environmentFilePath);
