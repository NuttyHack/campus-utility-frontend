import { useEffect } from 'react';
import socket, { connectSocket } from '../services/socket';

export const useSocket = (token) => {
  useEffect(() => {
    if (token) {
      connectSocket(token);
    }
    return () => socket.disconnect();
  }, [token]);

  return socket;
};