import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-40b37-default-rtdb.firebaseio.com/'
});
export default instance;