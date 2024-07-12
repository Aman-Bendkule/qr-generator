const inquirer = require('inquirer');
const qr = require('qrcode');
// const fs = require('fs');

async function generateQRCode() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'data',
        message: 'Enter the data for which you want to generate a QR Code:',
      },
    ]);

    const qrCodeData = answers.data;
    const fileName = `${qrCodeData.replace(/\s+/g, '_')}.png`;

    qr.toFile(fileName, qrCodeData, (err) => {
      if (err) {
        console.error('Failed to generate QR Code:', err);
      } else {
        console.log(`QR Code generated and saved as ${fileName}`);
      }
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

generateQRCode();

