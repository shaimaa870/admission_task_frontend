<template>
  <div></div>
   <v-data-table
   :headers="headers"
    :items="modelsList?.items||[]"
    :loading="modelsList?.loading"
    v-model:items-per-page="filter.pageSize"
   v-model:page="filter.page"
    class="elevation-1 mt-3"
  >
  <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Models</v-toolbar-title>
       
              <v-btn
                color="primary"
                class="mb-2"
                @click="createModel()"
              >
                New Item
              </v-btn>
              
          
          <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        </v-toolbar>
      </template>
  <template v-slot:item.actions="{ item }">
    <span class="material-icons lue" @click="editModel(item.raw.id)">edit</span>
    <span class="material-icons lue"  @click="removeElement(item.raw.id)">delete</span>


  
    </template>
   
  
</v-data-table>
  
   
  </template>
  
  <script >
    import router from '@/router';
import { mapActions ,mapGetters} from 'vuex'
import { toRaw} from 'vue'

  export default{
    components: {
    },
    data () {
      return {
        allModels:{},
        filter: {
          page:1,
          pageSize:5
        },
        deletedId:"",
        dialogDelete:false,
        headers: [
        { title: "Name", align: "center", sortable: true,key:"name"},
        { title: "Model", align: "center", sortable: true,key:"model"},
        { title: "Description", align: "center", sortable: true,key:"description"},
        { title: "Actions", sortable: false,key:"actions",align: "center" },

        ],
          }
      },
      watch:{
       models: function(v){
        console.log("filter",this.filter);
       }
      },
      computed: {
      ...mapGetters('models',['modelsList'])
      
    },
      methods:{
        ...mapActions('models', ['getAllModels','deleteModel']),
        editModel:function(id){
          router.push(`/model-admin/${id}`)
        },
        createModel:function(){
          router.push(`/model-admin/new`)
        },
        removeElement:function(id){
          this.deletedId=id;
         this.dialogDelete=true;

        },
        closeDelete:function(){
         this.dialogDelete=false;

        },
        deleteItemConfirm:function(){
         this.deleteModel(this.deletedId)
         this.closeDelete()

        },
      },
    
      created:function(){
        this.getAllModels()
      },
    
  }
  </script>
  <style>
  .list {
  max-width: 750px;
}
</style>