<template>
    
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
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
        <span class="material-icons text-success" @click="seeDetails(item.raw.id)"> book</span>
    </template>
    </v-data-table>
    </template>
    
    <script >
      import router from '@/router';
  import { mapActions ,mapGetters} from 'vuex'
  
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
          ...mapActions('models', ['getAllModels']),
          seeDetails:function(id){
            debugger
            router.push(`/model-user/${id}`)

          }
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