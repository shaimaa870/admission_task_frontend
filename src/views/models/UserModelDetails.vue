<template>
  <v-card
    class="mx-auto my-2"
    max-width="400"

  >
    <v-img
      class="align-end text-white"
      :src="staticDataUrl + '/' + modelDetails.photo"
      
    >
    </v-img>
    <v-card-subtitle class="pt-4" >
  <span class="title-color">Name: </span>  {{modelDetails.name}}
    </v-card-subtitle>
    <v-card-subtitle class="pt-4">
  <span class="title-color">Model: </span>  {{modelDetails.model}}
    </v-card-subtitle>

    <v-card-text>

      <div> <span class="title-color">Description:</span>{{modelDetails.description}}</div>

    </v-card-text>
  </v-card>
 
</template>
  
<script>
import { mapState, mapActions } from 'vuex'
import { toRaw } from 'vue'
import { staticDataUrl } from '@/_helpers/auth_header';

export default {
  name: "model-details",
  data() {
    return {
      routeParam: this.$route.params.id,
      show:false,
      staticDataUrl,
      modelDetails: {
        id: null,
        name: "",
        model: "",
        description: "",
        photo: ""
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
    ...mapState('models', ['model'])

  },
  watch: {
    model: function (v) {
      console.log("state model", v);
      this.modelDetails = { ...toRaw(v)?.item }
    }
  },
  created: function () {
    this.getModelById(this.routeParam)
  },

};
</script>
  
<style scoped>
.title-color{
  color: rgb(24, 207, 24);
}
.model-details {
  max-width: 700px;
  text-align: center;
}
</style>