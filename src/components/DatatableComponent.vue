<template>
  
    <v-row align="center" class="list px-3 mx-auto">
    <!-- <v-col cols="12" md="8">
      <v-text-field v-model="title" label="Search by Title"></v-text-field>
    </v-col> -->

    <v-col cols="12" md="4">
      <!-- <v-btn small @click="searchTitle">
        Search
      </v-btn> -->
    </v-col>

    <v-col cols="12" sm="12">
      <v-card class="mx-auto" tile>
        <v-card-title>Tutorials</v-card-title>

        <v-data-table
          :headers="headers"
          :items="modelsList?.items?.items||[]"
          disable-pagination
          :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
            <v-icon small @click="deleteTutorial(item.id)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <v-card-actions v-if="modelsList?.items?.items?.length > 0">
          <v-btn small color="error" @click="removeAllTutorials">
            Remove All
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  </template>
  
  <script >
    import { mapState, mapActions ,mapGetters} from 'vuex'
  export default{
    components: {
      EasyDataTable: window['vue3-easy-data-table'],
    },
    data () {
      return {
        allModels:{},
        headers: [
        { text: "Id", align: "start", sortable: false, value: "id" ,key:"id"},
        { text: "Name", align: "center", sortable: false, value: "name" ,key:"name"},
        { text: "Actions", value: "actions", sortable: false,key:"actions" },

        ],
        // items:[{name:"shimaa"}]

          }
      },
      computed: {
      ...mapGetters('models',['modelsList'])
      
    },
      methods:{
        ...mapActions('models', ['getAllModels']),
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