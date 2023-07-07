<template>
    <div class="home">
        <div class="container">
            <AdminModelsListComponent v-if="isAdmin"></AdminModelsListComponent>
            <UserModelsListComponent v-if="isUser"></UserModelsListComponent>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import  AdminModelsListComponent  from "@/views/models/AdminModelsListView.vue";
import  UserModelsListComponent  from "@/views/models/UserModelsList.vue";

import {useUser} from '@/_hooks/useUser'
export default{
  name:"about",
  data(){
    return {
      isAdmin:useUser()?.isAdmin,
      isUser:useUser()?.isUser,

    }
  },
  components:{
    AdminModelsListComponent,
    UserModelsListComponent
  }
}
</script>
