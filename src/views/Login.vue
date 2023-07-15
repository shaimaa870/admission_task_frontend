<template>
        <div class="login-page">
      <transition name="fade">
         <div  class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
         <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
               <div class="card login" >
                  <h1>Sign In</h1>
                  <form class="form-group" @submit.prevent="handleSubmit">
                     <input v-model="username" type="text" class="form-control" placeholder="username" required>
                     <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
                     <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                     <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                     <input type="submit" :disabled="submitted" class="btn btn-primary text-light">
                     <p>Don't have an account? <a href="sign-up" >Sign up here</a>
                     </p>
                  </form>
               </div>

            </div>
         </div>

      </div>


   
    </div>
  </template>
  <script>
  import { mapState, mapActions } from 'vuex'

  export default{
    name:"login",
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        ...mapState('auth', ['status'])
    },
    created () {
    
    },
    methods: {
        ...mapActions('auth', ['login', 'logout']),
        handleSubmit (e) {
         e.preventDefault()
            this.submitted = true;
            const { username, password } = this;
            if (username && password) {
               this.login({username,password});
            this.submitted = false;

            }
        }
    }
};
   
  
  </script>
<style scoped>
  p {
   line-height: 1rem;
}

.card {
   padding: 20px;
   margin: 10px;
}


input {
      margin-bottom: 10px;
   }

.login-page {
   align-items: center;
   display: flex;
   height: 100vh;

   .wallpaper-login {
      background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
   }
   
   .fade-enter-active,
   .fade-leave-active {
  transition: opacity .5s;
}
   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }
   
   .wallpaper-register {
      background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -1;
   }

   h1 {
      margin-bottom: 1.5rem;
   }
}

.error {
   animation-name: errorShake;
   animation-duration: 0.3s;
}

@keyframes errorShake {
   0% {
      transform: translateX(-25px);
   }
   25% {
      transform: translateX(25px);
   }
   50% {
      transform: translateX(-25px);
   }
   75% {
      transform: translateX(25px);
   }
   100% {
      transform: translateX(0);
   }
}

</style>