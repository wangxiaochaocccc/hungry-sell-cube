import axios from 'axios'

const ERR_OK = 0

export function get(url) {
    return function(params) {
        return axios.get(url, {
            params
        }).then((res) => {
            const { error, data } = res.data
            if (error === ERR_OK) {
                return data
            }
        })
    }
}
