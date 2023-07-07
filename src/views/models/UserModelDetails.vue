<template>
    <div class="submit-form mt-3 mx-auto">
      <p class="headline"> Model Details</p>
  <div></div>
             <v-img
          :width="150"
          cover
          class="text-center"
          :src="staticDataUrl+'/'+modelDetails.photo+'?w=150'"
        ></v-img>
            <v-alert color="success " class="my-2"> <span class="text-dark">Name </span> : {{ modelDetails.name }}  </v-alert>
                <v-alert color="success " class="my-2"> <span class="text-dark">Model </span> : {{ modelDetails.model }}  </v-alert>
                <v-alert color="success " class="my-2"> <span class="text-dark">Description </span> : {{ modelDetails.description }}  </v-alert>
           

  
  
   
    </div>
  </template>
  
  <script>
    import { mapState, mapActions } from 'vuex'
    import {toRaw } from 'vue'
    import { staticDataUrl} from '@/_helpers/auth_header';

  export default {
    name: "model-details",
    data() {
      return {
        routeParam:this.$route.params.id,
        staticDataUrl,
        modelDetails: {
          id:null,
          name:"",
          model: "",
          description:"",
          photo:""
        },
        submitted: false,
      };
    },
    methods: {
      ...mapActions('models', ['getModelById']),
      newModel() {
        this.submitted = false;
        this.modelDetails = {};
      },
    },
    computed: {
      ...mapState('models',['model'])
      
    },
    watch:{
      model:function(v){
        console.log("state model",v);
     this.modelDetails={...toRaw(v)?.item} 
      }
   },
    created:function(){
        this.getModelById(this.routeParam)
      },
    
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
  }
  </style>