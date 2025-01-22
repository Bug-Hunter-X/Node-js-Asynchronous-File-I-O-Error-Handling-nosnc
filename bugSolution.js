```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Failed to read file:', err);
      return; // This return statement is crucial
    }

    // Process the data
    const lines = data.split('\n');
    const processedData = lines.map(line => line.toUpperCase());

    // Asynchronous write operation
    fs.writeFile(filePath + '.processed', processedData.join('\n'), err => {
      if (err) {
        console.error('Failed to write file:', err);
      } else {
        console.log('File processed and written successfully.');
      }
    });
  });
}

processFile('myFile.txt');
```