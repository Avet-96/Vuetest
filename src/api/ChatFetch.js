import axios from 'axios'

axios.defaults.baseURL = 'https://my-json-server.typicode.com/Avet-96/Vuetest/'

export default class CatApi {

    static getUsers() {
        return axios.get('/user')
    }
    // static getComments() {
    //     return axios.get('albums')
    // }


}
