import router from '@/router';
import { modelService } from '../_services';
import { toast } from 'vue3-toastify';

const state = {
    models: {}
};
const getters = { 
    modelsList: state => state.models
};

const actions = {
  async  getAllModels({ commit }) {
        commit('getAllModelsRequest');

      await  modelService.getAllModels()
            .then(
                res => {
                 
                    commit('getAllModelsSuccess', res?.data)
            },
                error =>{ 
                    commit('getAllModelsFailure', error)
                }
            );
    },
    async  getModelById({ commit },id) {
        commit('getModelByIdRequest');

      await  modelService.getModelById(id)
            .then(
                res => {
                  
                    commit('getModelByIdSuccess', res?.data)
            },
                error =>{ 
                    commit('getModelByIdFailure', error)
                }
            );
    },
    
    async  CreateModel({ commit },model) {
        commit('CreateModelRequest');

      await  modelService.CreateModel(model)
            .then(
                res => {
                 
                    commit('CreateModelSuccess', res?.data)
                    router.push('/')
            },
                error =>{ 
                    commit('CreateModelFailure', error)
                    toast.error('there is an error, plz try again')
                }
            );
    },
    async  updateModel({ commit },model) {
        commit('updateModelRequest');

      await  modelService.updateModel(model)
            .then(
                res => {
                   
                    commit('updateModelSuccess', res?.data)
                    router.push("/")
            },
                error =>{ 
                    commit('updateModelFailure', error)
                    toast.error('there is an error, plz try again')

                }
            );
    },
    
    

 async deleteModel({ commit }, id) {
        commit('deleteModelRequest', id);

      await  modelService.deleteModel(id)
            .then(
                model => commit('deleteModelSuccess', id),
                error => commit('deleteModelFailure', { id, error: error.toString() })
            );
    }
};

const mutations = {
    getAllModelsRequest(state) {
        state.models = { loading: true };
    },
    getAllModelsSuccess(state, models) {
        state.models = { items: models };
    },
    getAllModelsFailure(state, error) {
        state.models = { error };
    },
    getModelByIdRequest(state) {
        state.model = { loading: true };
    },
    getModelByIdSuccess(state, model) {
        state.model = { item: model };
    },
    getModelByIdFailure(state, error) {
        state.model = { error };
    },
   CreateModelRequest(state) {
        state.model = { loading: true };
    },
   CreateModelSuccess(state, model) {
        state.model = { item: model };
    },
   CreateModelFailure(state, error) {
        state.model = { error };
    },
    deleteModelRequest(state) {
        state.model = { loading: true };
    },
   deleteModelSuccess(state, model) {
        state.model = { item: model };
    },
   deleteModelFailure(state, error) {
        state.model = { error };
    },

    deleteModelRequest(state, id) {
        // add 'deleting:true' property to user being deleted
        state.models.items = state.models.items.map(model =>
            model.id === id
                ? { ...model, deleting: true }
                : model
        )
    },
    deleteModelSuccess(state, id) {
        // remove deleted user from state
        state.models.items = state.models.items.filter(model => model.id !== id)
    },
    deleteModelFailure(state, { id, error }) {
        // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
        state.Model.items = state.models.items.map(model => {
            if (model.id === id) {
                // make copy of user without 'deleting:true' property
                const { deleting, ...userCopy } = model;
                // return copy of user with 'deleteError:[error]' property
                return { ...userCopy, deleteError: error };
            }

            return model;
        })
    }
};

export const models = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};