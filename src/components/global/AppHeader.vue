<template>
    <div id="nav">
      <nav class=" navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"> <span class="material-icons ">face</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            v-on:click="toggleNavbar"
            >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent"
        v-bind:class="{ in: show }">
            <div class="navbar-nav mr-auto">
                <router-link to="/" class="nav-item nav-link">Home</router-link>
                <!-- <router-link to="/about" class="nav-item nav-link">About</router-link> -->
                <router-link v-if="!isLogin" to="/login" class="nav-link ">login</router-link>
                <router-link v-if="!isLogin" to="/sign-up" class="nav-link ">Sign Up</router-link>
                <router-link v-if="isLogin" to="#" class="nav-link"><span @click="logout()">Logout</span></router-link>
            </div>
            <!-- <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success me-2" type="submit">Search</button>
            </form> -->
        </div>
    </nav>
     </div>
      <router-view/>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import {useUser} from '@/_hooks/useUser'

export default {
    name: "AppHeader",
    methods:{
        ...mapActions('auth', ['logout']),
        toggleNavbar:function() {
      this.show = !this.show;
    }
        
    },
    data () {
      return {
        show:true,
        isLogin:useUser().isLogin
          }
      },
}
</script>
<style scoped>

</style>