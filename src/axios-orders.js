import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-database-24f95.firebaseio.com/'
})

export default instance;