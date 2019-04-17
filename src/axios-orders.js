import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://react-my-burger-4e92c.firebaseio.com/',
});

export default instance;