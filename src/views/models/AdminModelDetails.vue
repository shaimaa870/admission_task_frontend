<template>
  <div class="submit-form mt-3 mx-auto">
    <p class="headline" v-if="routeParam === 'new'">Add Model</p>
    <p class="headline" v-else="routeParam!=='new'">Update Model</p>


    <div>
      <form action="index.html" @submit.prevent="saveModel">
        <div class="form-floating mb-3">
          <input class="form-control" id="img" @change="onFileSelected($event)" type="file" placeholder="img" >
          <label for="img">photo</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" id="name" v-model="modelDetails.name" type="text" placeholder="name" required>
          <label for="name">name</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" id="model" v-model="modelDetails.model" type="text" placeholder="model" required>
          <label for="model">model</label>
        </div>
        <div class="form-floating mb-3">
          <input class="form-control" id="description" v-model="modelDetails.description" type="text" placeholder="description" required>
          <label for="description">description</label>
        </div>
        <div class="form-group">
          <button class="btn btn-success text-light"  type="submit" :disabled="submitted"
           >Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>
  
<script>
import { mapState, mapActions } from 'vuex'
import { toRaw } from 'vue'
import useFile from '@/_helpers/useFile';
import { staticDataUrl } from '@/_helpers/auth_header';


export default {
  name: "add-tutorial",

  data() {
    return {
      routeParam: this.$route.params.id,
      staticDataUrl,
      modelDetails: {
        id: null,
        name: "",
        model: "",
        description: "",
        img: null,
        photo: null
      },
      submitted: false,
    };
  },
  methods: {
    ...mapActions('models', ['CreateModel', 'getModelById', 'updateModel']),
    saveModel() {
      this.submitted = true;
      if (this.$route.params.id === "new") {
        this.CreateModel(this.modelDetails)
      }
      else {
        this.updateModel(this.modelDetails)
      }
      this.submitted = false;
      
    },

    newModel() {
      this.submitted = false;
      this.modelDetails = {};
    },
    onFileSelected: function (e) {
      e.preventDefault();
      let reader = new FileReader();
      let imgFile = e.target.files[0];
      let validImg = this.isValidImage(imgFile);

      let fileName = imgFile.name.split(".")[0].toLowerCase();
      let extension = imgFile.name.split(".")[1].toLowerCase();

      if (validImg && validImg !== null) {
        reader.onloadend = () => {
          this.modelDetails.img = {
            ...this.modelDetails.img,
            base64: reader.result,
            name: fileName,
            extension
          }
        }
      };
      reader.readAsDataURL(imgFile);
    },
    isValidImage: (file) => {
      return file?.type?.match("image.*") || false;
    }
  },
  computed: {
    ...mapState('models', ['model'])

  },
  watch: {
    // modelDetails:function(v){
    //   this.model

    // },
    model: function (v) {
      console.log("state model", toRaw(v)?.item?.photo);
      this.modelDetails = { ...toRaw(v)?.item, photo: toRaw(v)?.item?.photo }
    }
  },
  created: function () {

    if (this.routeParam !== "new") {
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