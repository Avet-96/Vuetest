import CatApi from "@/api/ChatFetch";

export default {
    actions: {
        async getUsersData({commit}) {
            try {
                let data = await CatApi.getUsers()
                commit('usersData', data.data)
            } catch (e) {
                throw e
            }
        },
        async getComments({commit}) {
            try {
                // let data = await CatApi.getComments()
                // console.log(data, 123)
                // commit('commentLists', data.data)
            } catch (e) {
                throw e
            }
        }
    },
    state: {
        users: [],
        comments: [],
    },
    mutations: {
        usersData(state, data) {
            state.users = data
        },
        commentLists(state, data) {
            state.comments = data
        }
    },
    getters: {
        getUserData(state) {
            return state.users
        },
        getCommentsList(state) {
            return state.comments
        }
    }
}
