import axios from 'axios';

const emotesInstance = axios.create({
  baseURL: 'https://7tv.io/v3', // Замените на ваш базовый URL
  timeout: 1000,
//   headers: {'X-Custom-Header': 'emotes'}
});

export default emotesInstance;