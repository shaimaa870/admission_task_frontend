import { createStore } from 'vuex'
import { alert } from './_alert.module';
import { auth } from './_auth.module';
import { users } from './_users.module';
import { models } from './_models.module';


export default createStore({
  modules: {
    alert,
    auth,
    users,
    models,
   // PluginArray:[]
  }
})

