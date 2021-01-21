import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

export default class CatApi {

    static getUsers() {
        return axios.get('users')
    }
    static getComments() {
        return axios.get('albums')
    }


}
