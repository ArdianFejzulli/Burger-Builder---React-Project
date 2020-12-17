import axios from 'axios';

const instance =  axios.create({
    baseURL: 'https://react-js-burger-builder-b16e7-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;