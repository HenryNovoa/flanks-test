# flanks-test

To run both in docker, run this command: docker-compose up --build

# Backend:

The high level explaination of the backend is that there are two threads.
The main thread is the one that serves the data, and a worker thread is created to deal with the upload of the data.

The architecture is as follows:

Routes -> Controller -> Services -> Repository



