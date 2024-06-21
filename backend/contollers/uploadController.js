const path = require('path');
const { Worker } = require('worker_threads');
const multer = require('multer');

const storage = multer.memoryStorage(); // use memory storage to avoid saving files on disk
const upload = multer({ storage });

const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const worker = new Worker(
    path.join(__dirname, '../workers/fileUploadWorker.js'),
    {
      workerData: { fileBuffer: req.file.buffer },
    },
  );

  let responseSent = false;

  const sendResponse = (status, message) => {
    if (!responseSent) {
      res.status(status).send(message);
      responseSent = true;
    }
  };

  worker.on('message', (message) => {
    if (message === 'success') {
      sendResponse(200, 'File processed successfully');
    } else {
      sendResponse(500, 'Error processing file');
    }
  });

  worker.on('error', (error) => {
    sendResponse(500, 'Error processing file');
  });

  worker.on('exit', (code) => {
    if (code !== 0) {
      sendResponse(500, `Worker stopped with exit code ${code}`);
    }
  });
};

module.exports = {
  upload,
  uploadFile,
};
