import axios from 'axios';
import { authHeader,url } from '../_helpers/auth_header';
import handleResponse from '@/_helpers/handle_response';

export const modelService = {
    getAllModels,
    getModelById,
    CreateModel,
    updateModel,
    deleteModel: _deleteModel
};


async function getAllModels () {

    return await axios.get(`${url}/model/search`, { headers: authHeader() });
}


async function getModelById(id) {

    return await axios.get(`${url}/model/model/${id}`, { headers: authHeader() });
}
async function CreateModel (model) {

    return await axios.post(`${url}/model/add-model`,model, { headers: authHeader() });
}

async function updateModel(model) {

    return await axios.put(`${url}/model/update-model`,model, { headers: authHeader() });
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _deleteModel(id) {
    return axios.delete(`${url}/model/delete-model/${id}`, { headers: authHeader() });
}

