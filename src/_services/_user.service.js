import axios from 'axios';
import { authHeader ,url} from '../_helpers/auth_header';
import VueJwtDecode from 'vue-jwt-decode';

export const userService = {
    login,
    logout,
    register,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser: _deleteUser
};

async function login(username, password) {
    return await axios.post(`${url}/auth/login`, { username, password })
       // .then(handleResponse)
        .then(res => {
            const {data}=res;
            const{payload}=data;
            if (payload.token) {
                localStorage.setItem('user', JSON.stringify(payload));
              let data=  VueJwtDecode.decode(payload?.token)
                localStorage.setItem('userData', JSON.stringify(data));

            }

            return payload;
        })

}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('userData');
    
}

async function register(user) {
    return await axios.post(`${url}/user-management/users`, user)
    .then(res => {
    debugger
        return res;
    })
}

function getAllUsers() {

    return axios.get(`${url}/users`, { headers: authHeader() })
}


function getUserById(id) {

    return axios.get(`${url}/users/${id}`,{ headers: authHeader() });
}

function updateUser(user) {

    return axios.put(`${url}/users/${user.id}`, user,{ headers: authHeader() });
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _deleteUser(id) {

    return fetch(`${url}/users/${id}`, { headers: authHeader() });
}

