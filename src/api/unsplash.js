import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID T8zr9GPmdK1j-DBH4bYYBhd5xpCFdWB86-vJMB79BJg'
  }
});
