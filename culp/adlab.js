const { extname } = require('path');

// Use the function directly from the cached reference
const fileExtension = extname('index.js'); // '.js'

// Always good to have error handling
try {
  if (typeof fileExtension !== 'string') {
    throw new Error('File path must be a string');
  }
  console.log(fileExtension);
} catch (error) {
  console.error('Error extracting file extension:', error.message);
}
