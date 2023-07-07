<template>
    <div class="submit-form mt-3 mx-auto">
      <p class="headline" v-if="routeParam==='new'">Add Model</p>
      <p class="headline" v-else="routeParam!=='new'">Update Model</p>

  
      <div v-if="!submitted">
        <v-form ref="form" lazy-validation>
          <v-img
          :width="150"
          aspect-ratio="16/9"
          cover
          :src="staticDataUrl+'/'+modelDetails?.photo?.url+'?w=150'"
        ></v-img>
          <v-file-input  label="Image input"  @change="onFileSelected($event)"> </v-file-input>
      
          
          <v-text-field
            v-model="modelDetails.name"
            :rules="[(v) => !!v || 'Name is required']"
            label="Name"
            required
          ></v-text-field>
           <v-text-field
            v-model="modelDetails.description"
            :rules="[(v) => !!v || 'Model is required']"
            label="Description"
            required
          ></v-text-field>
  
          <v-text-field
            v-model="modelDetails.model"
            :rules="[(v) => !!v || 'Model is required']"
            label="Model"
            required
          ></v-text-field>
          <v-img > </v-img>
        </v-form>
  
        <v-btn color="primary" class="mt-3" @click="saveModel">Submit</v-btn>
      </div>
  
      <div v-else>
        <v-card class="mx-auto">
          <v-card-title>
            Submitted successfully!
          </v-card-title>
  
          <v-card-subtitle>
            Click the button to add new Tutorial.
          </v-card-subtitle>
  
          <v-card-actions>
            <v-btn color="success" @click="newModel">Add</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </template>
  
  <script>
    import { mapState, mapActions } from 'vuex'
    import {toRaw } from 'vue'
import  useFile from '@/_helpers/useFile';
import { staticDataUrl} from '@/_helpers/auth_header';


  export default {
    name: "add-tutorial",

    data() {
      return {
        routeParam:this.$route.params.id,
        staticDataUrl,
        modelDetails: {
          id:null,
          name:"",
          model: "",
          description:"",
          photo:useFile()
        },
        submitted: false,
      };
    },
    methods: {
      ...mapActions('models', ['CreateModel','getModelById','updateModel']),
      saveModel() {
        this.submitted = true;
        if (this.$route.params.id==="new") {
          this.CreateModel(this.modelDetails)
      }
      else{
        this.updateModel(this.modelDetails)
      }
      },
  
      newModel() {
        this.submitted = false;
        this.modelDetails = {};
      },
      onFileSelected:function(e){
        e.preventDefault();
    let reader = new FileReader();
    let imgFile = e.target.files[0];
    let validImg = this.isValidImage(imgFile);

    let fileName = imgFile.name.split(".")[0].toLowerCase();
    let extension = imgFile.name.split(".")[1].toLowerCase();

    if (validImg && validImg !== null) {
      reader.onloadend = () => {
        this.modelDetails.photo={
        ...this.modelDetails.photo,
        base64: reader.result,
          readUrl: null,
          // fileStatus: url ? 2 : 1,
          fileStatus:  1,
          name: fileName,
          extension
      }
      }
      };
      reader.readAsDataURL(imgFile);
      },
       isValidImage :(file) => {
    return file?.type?.match("image.*") || false;
  }
    },
    computed: {
      ...mapState('models',['model'])
      
    },
    watch:{
      // modelDetails:function(v){
      //   this.model

      // },
      model:function(v){
        console.log("state model",toRaw(v)?.item?.photo);
     this.modelDetails={...toRaw(v)?.item,photo:useFile(toRaw(v)?.item?.photo)} 
      }
   },
    created:function(){
      
      if (this.routeParam!=="new") {
        this.getModelById(this.routeParam)

        
      }
     
      },
    
  };
  </script>
  
  <style>
  .submit-form {
    max-width: 300px;
  }
  </style>