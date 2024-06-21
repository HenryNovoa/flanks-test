const { parentPort, workerData } = require('worker_threads');
const { Readable } = require('stream');
const fileProcessor = require('../services/fileProcessor');

const processFile = async (byteArray) => {
  const buffer = Buffer.from(byteArray);
  const fileStream = Readable.from(buffer);
  try {
    await fileProcessor.processFile(fileStream);
    parentPort.postMessage('success');
  } catch (error) {
    parentPort.postMessage('error');
  }
};

processFile(workerData.fileBuffer);
