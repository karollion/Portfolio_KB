export const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3030/api';

  export const FILES_URL = (process.env.NODE_ENV === 'production') 
  ? '/public/' 
  : 'http://localhost:3030/public/';