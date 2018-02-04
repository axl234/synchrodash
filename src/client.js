import io from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  // eslint-disable-next-line no-console
  console.log('connected!');
});
