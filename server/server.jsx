const io = require('socket.io')(3001, {
  // TO REMEDY CORS POLICY
  cors: {
    origin: 'https://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {});
